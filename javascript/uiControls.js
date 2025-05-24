export function setupUI() {
  console.log("✅ setupUI called");

  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) {
    console.warn("⚠️ No #theme-toggle element found.");
    return;
  }

  // Set initial theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);

  // Add click handler
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

function applyTheme(theme) {
  console.log(`🎨 Applying theme: ${theme}`);
  document.body.classList.toggle("dark", theme === "dark");
}
