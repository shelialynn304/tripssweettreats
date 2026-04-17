// HERO LOAD ANIMATION
gsap.to(".fade-up", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2
});

// SCROLL ANIMATIONS
const fadeIns = document.querySelectorAll(".fade-in");
const slides = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  fadeIns.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      gsap.to(el, { opacity: 1, duration: 1 });
    }
  });

  slides.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      gsap.to(el, { opacity: 1, x: 0, duration: 1 });
    }
  });
});