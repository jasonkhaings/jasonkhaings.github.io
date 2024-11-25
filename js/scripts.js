// Apply saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
    }
});

// Theme Toggle for Dark Mode and Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const body = document.body;
    const header = document.querySelector('header');
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);
});

// Change iframe source dynamically
function changeIframeSrc(url) {
    const iframe = document.getElementById('startup-iframe');
    iframe.src = url;
}
