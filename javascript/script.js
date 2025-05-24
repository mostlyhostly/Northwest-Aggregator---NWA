import {setIcon} from './icons.js';

import {toggleDarkMode,initDarkMode} from './uiControls.js';

async function loadNews() {
  try {
    const res = await fetch('news.json');
    const data = await res.json();

    const container = document.getElementById('news-container');
    container.innerHTML = '';

    data.forEach(story => {
      const div = document.createElement('div');
      div.className = 'story';

      const sourceName = new URL(story.source).hostname.replace('www.', '');

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
    console.error(error);
    document.addEventListener("DOMContentLoaded", () => {
    setupUI();
  });
  }
}

// Load news on page load
loadNews();

// === View Toggle Logic ===
const layoutToggle = document.getElementById('toggle-layout');
const viewIcon = document.getElementById('viewIcon');
const container = document.getElementById('news-container');

let currentView = container.classList.contains('list-view') ? 'list' : 'grid';
setIcon(viewIcon, currentView);

layoutToggle.addEventListener('click', () => {
  container.classList.toggle('list-view');
  container.classList.toggle('grid-view');

  currentView = container.classList.contains('list-view') ? 'list' : 'grid';
  setIcon(viewIcon, currentView);
});

// === Dark Mode Toggle ===
const themeToggle = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('themeIcon');

let currentTheme = initDarkMode();
setIcon(themeIcon, currentTheme === 'dark' ? 'moon' : 'sun');

themeToggle.addEventListener('click', () => {
  currentTheme = toggleDarkMode();
  setIcon(themeIcon, currentTheme === 'dark' ? 'moon' : 'sun');
});
