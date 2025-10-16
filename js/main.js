document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = y);

  // Example: if small screen, swap heavy images (not needed with inline SVG placeholders)
  if (window.innerWidth < 600) {
    // placeholder hook
  }
});
