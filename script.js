const ring = document.querySelector('.cursor-ring');
window.addEventListener('pointermove', (event) => {
  if (!ring) return;
  ring.style.opacity = '1';
  ring.style.left = `${event.clientX}px`;
  ring.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
