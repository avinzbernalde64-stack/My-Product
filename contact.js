const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nameInput = this.querySelector('input[name="name"]');
    const emailInput = this.querySelector('input[name="email"]');
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
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
      // Gather form data
      const formData = new FormData(contactForm);
      
      // Send data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Thank you for contacting VINJ!\n\nWe'll get back to you as soon as possible.");
        contactForm.reset();
      } else {
        alert("❌ Something went wrong. Please try again. " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Network error. Please check your connection and try again.");
    } finally {
      // Reset button state
      button.disabled = false;
      button.innerHTML = '<span>Send Message</span><i class="fas fa-arrow-right"></i>';
    }
  });
}
