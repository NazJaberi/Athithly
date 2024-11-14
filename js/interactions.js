// Form Submission Handling
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Form data processing
  alert("Thank you for reaching out! We will get back to you soon.");
  contactForm.reset();
});

// Interactive elements (e.g., feature demos)
const featureItems = document.querySelectorAll(".feature-item");
featureItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Add interactive behavior
    item.classList.add("hovered");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hovered");
  });
});
