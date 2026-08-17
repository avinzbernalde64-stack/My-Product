const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector("textarea");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert("⚠️ Please enter your name.");
      nameInput.focus();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    if (!message) {
      alert("⚠️ Please write a message.");
      messageInput.focus();
      return;
    }

    const button = this.querySelector("button");

    button.disabled = true;
    button.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      alert("✅ Thank you for contacting VINJ!\n\nWe'll get back to you as soon as possible.");

      this.reset();

      button.disabled = false;
      button.innerHTML =
        '<span>Send Message</span><i class="fas fa-arrow-right"></i>';
    }, 1500);
  });
}
