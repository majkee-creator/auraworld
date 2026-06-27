const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 55, 260)}ms`;
  observer.observe(item);
});

let auraClicks = 0;
let resetTimer;
document.querySelectorAll('.brand img, .hero-symbol, .vision img').forEach((logo) => {
  logo.addEventListener('click', () => {
    auraClicks += 1;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { auraClicks = 0; }, 1200);
    if (auraClicks >= 5) {
      document.body.classList.toggle('aura-mode');
      auraClicks = 0;
    }
  });
});
