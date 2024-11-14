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

  // Form handling
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        },
      })
      .then(response => {
        if (response.ok) {
          formStatus.innerHTML = "<p class='alert alert-success'>Thanks for your submission!</p>";
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              formStatus.innerHTML = data["errors"].map(error => `<p class='alert alert-danger'>${error}</p>`).join("");
            } else {
              formStatus.innerHTML = "<p class='alert alert-danger'>Oops! There was a problem submitting your form</p>";
            }
          });
        }
      })
      .catch(error => {
        formStatus.innerHTML = "<p class='alert alert-danger'>Oops! There was a problem submitting your form</p>";
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      });
    });
  }

  // Feather icons initialization
  feather.replace();
});
