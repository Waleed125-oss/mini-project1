// Theme Toggle + Scroll Animations + Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  } else {
    body.classList.add("light");
    toggleBtn.textContent = "🌙";
  }

  // Toggle theme
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
      } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
      }
    });
  }

  // Scroll Animations
  const animatedItems = document.querySelectorAll("[data-animate]");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    animatedItems.forEach((item) => {
      const boxTop = item.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        item.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Contact Form Validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Message sent successfully!");
      form.reset();
    });
  }
});
