// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
};

const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

document
  .querySelectorAll(".feature-item, .tech-demo, .card, .phone-mockup")
  .forEach((element) => {
    observer.observe(element);
  });
