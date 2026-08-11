const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
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
