/*=========================================
        HEADER BLUR
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 80) {
    
    header.style.background = "rgba(0,0,0,.90)";
    header.style.backdropFilter = "blur(20px)";
    header.style.borderBottom = "1px solid rgba(255,255,255,.12)";
    
  } else {
    
    header.style.background = "rgba(0,0,0,.55)";
    header.style.backdropFilter = "blur(18px)";
    header.style.borderBottom = "1px solid rgba(255,255,255,.08)";
    
  }
  
});


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
  
  ".about-section, .mission-box, .value-card, .founder-card"
  
);

const reveal = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all .8s ease";
      
    }
    
  });
  
}, {
  threshold: .15
});

revealElements.forEach(element => {
  
  reveal.observe(element);
  
});


/*=========================================
        VALUE CARD HOVER
=========================================*/

const cards = document.querySelectorAll(".value-card");

cards.forEach(card => {
  
  card.addEventListener("mousemove", (e) => {
    
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    
    const y = e.clientY - rect.top;
    
    const rotateY = ((x / rect.width) - 0.5) * 10;
    
    const rotateX = ((y / rect.height) - 0.5) * -10;
    
    card.style.transform =
      `perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;
    
  });
  
  card.addEventListener("mouseleave", () => {
    
    card.style.transform =
      "perspective(800px) rotateX(0) rotateY(0)";
    
  });
  
});


/*=========================================
        FOUNDER IMAGE
=========================================*/

const founder = document.querySelector(".founder-image img");

if (founder) {
  
  founder.addEventListener("mouseenter", () => {
    
    founder.style.transform = "scale(1.08)";
    
  });
  
  founder.addEventListener("mouseleave", () => {
    
    founder.style.transform = "scale(1)";
    
  });
  
}


/*=========================================
        HERO PARALLAX
=========================================*/

window.addEventListener("scroll", () => {
  
  const hero = document.querySelector(".about-hero");
  
  const scroll = window.pageYOffset;
  
  hero.style.backgroundPositionY = scroll * 0.45 + "px";
  
});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const socialButtons = document.querySelectorAll(".social-links a");

socialButtons.forEach(button => {
  
  button.addEventListener("click", function(e) {
    
    let ripple = document.createElement("span");
    
    let size = Math.max(this.clientWidth, this.clientHeight);
    
    ripple.style.width = size + "px";
    
    ripple.style.height = size + "px";
    
    ripple.style.position = "absolute";
    
    ripple.style.borderRadius = "50%";
    
    ripple.style.background = "rgba(255,255,255,.35)";
    
    ripple.style.left = e.offsetX - size / 2 + "px";
    
    ripple.style.top = e.offsetY - size / 2 + "px";
    
    ripple.style.transform = "scale(0)";
    
    ripple.style.animation = "ripple .6s linear";
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      
      ripple.remove();
      
    }, 600);
    
  });
  
});


/*=========================================
        SMOOTH FADE TITLE
=========================================*/

const heroTitle = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  
  let value = window.scrollY;
  
  heroTitle.style.opacity = 1 - value / 450;
  
  heroTitle.style.transform =
    `translateY(${value*0.3}px)`;
  
});
