// Helper function to apply the theme
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}

// Exported function to initialize dark mode
export function initDarkMode() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Determine theme: use saved, or system preference, or default to light
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
  return theme;
}

// Exported function to toggle dark mode
export function toggleDarkMode() {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  return newTheme;
}
