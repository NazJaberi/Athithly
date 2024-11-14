document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }

  // Active link state
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".navbar-nav .nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").slice(1) === current) {
        item.classList.add("active");
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert("Thank you for reaching out! We will get back to you soon.");
    contactForm.reset();
  });

  // Feather icons initialization
  feather.replace();
});
