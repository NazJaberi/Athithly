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

  // Enhanced form submission handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      const button = contactForm.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      try {
        button.disabled = true;
        button.textContent = "Sending...";

        // Formspree will handle the form submission
        // We don't need to prevent default or handle the submission manually

        // Optional: Add custom success handling
        contactForm.addEventListener("formspree:submit", () => {
          alert("Thank you for your message! We'll get back to you soon.");
          contactForm.reset();
        });
      } catch (error) {
        console.error("Submission error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      } finally {
        button.disabled = false;
        button.textContent = originalText;
      }
    });
  }

  // Feather icons initialization
  feather.replace();
});
