import { setIcon } from './icons.js';
import { toggleDarkMode, initDarkMode } from './uiControls.js';

async function loadNews() {
  try {
    const res = await fetch('news.json'); // Assumes news.json is in the root
    const data = await res.json();

    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear loading message or previous content

    data.forEach(story => {
      const div = document.createElement('div');
      div.className = 'story';

      const sourceName = new URL(story.source).hostname.replace('www.', '');

      // Use template literals for innerHTML
      div.innerHTML = `
        <p>${story.summary}</p>
        <div class="links">
          <a href="${story.source}" target="_blank">${sourceName}</a>
          ${story.related_sources?.map(link => {
            const relatedName = new URL(link).hostname.replace('www.', '');
            return `<a href="${link}" target="_blank">${relatedName}</a>`;
          }).join('') || ''}
        </div>
        <div class="timestamp">${new Date(story.timestamp).toLocaleString()}</div>
      `;

      container.appendChild(div);
    });
  } catch (error) {
    document.getElementById('news-container').textContent = 'Failed to load news.';
    console.error('Error loading news:', error); // Added more descriptive error
  }
}

// Load news on page load
loadNews();

// === View Toggle Logic ===
const layoutToggle = document.getElementById('toggle-layout');
const viewIcon = document.getElementById('viewIcon'); // Assumes this is the span inside the button
const newsContainer = document.getElementById('news-container'); // Renamed for clarity

// Read initial layout from DOM (news-container's class)
let currentView = newsContainer.classList.contains('list-view') ? 'list' : 'grid';
setIcon(viewIcon, currentView);

layoutToggle.addEventListener('click', () => {
  newsContainer.classList.toggle('list-view');
  newsContainer.classList.toggle('grid-view');

  currentView = newsContainer.classList.contains('list-view') ? 'list' : 'grid';
  setIcon(viewIcon, currentView);
});

// === Dark Mode Toggle ===
const themeToggle = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('themeIcon'); // Assumes this is the span inside the button

let currentTheme = initDarkMode();
setIcon(themeIcon, currentTheme === 'dark' ? 'moon' : 'sun');

themeToggle.addEventListener('click', () => {
  currentTheme = toggleDarkMode();
  setIcon(themeIcon, currentTheme === 'dark' ? 'moon' : 'sun');
});
