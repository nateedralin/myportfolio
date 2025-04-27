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
  
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Hero entrance
  gsap.from('.hero-text h1', { opacity: 0, y: 50, duration: 1 });
  gsap.from('.hero-text p', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
  gsap.from('.btn', { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.6 });
  
  // Section scroll animations
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      scrollTrigger: section,
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  });
  
