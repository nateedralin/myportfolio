// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Theme toggle
const toggleBtn = document.getElementById('toggleTheme');
const updateIcon = () => {
  toggleBtn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
};

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  updateIcon();
});

updateIcon(); // Run on load

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
