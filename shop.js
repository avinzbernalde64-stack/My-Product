/*=========================================
        SMOOTH REVEAL
=========================================*/

const products = document.querySelectorAll(".product");

const observer = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = ".8s ease";
      
    }
    
  });
  
}, {
  threshold: .2
});

products.forEach(card => {
  
  observer.observe(card);
  
});


/*=========================================
        PARALLAX BANNER
=========================================*/

window.addEventListener("scroll", () => {
  
  const banner = document.querySelector(".shop-banner");
  
  let value = window.scrollY;
  
  banner.style.backgroundPositionY = value * 0.4 + "px";
  
});


/*=========================================
        PRODUCT TILT
=========================================*/

products.forEach(card => {
  
  card.addEventListener("mousemove", (e) => {
    
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    
    const y = e.clientY - rect.top;
    
    const rotateY = ((x / rect.width) - 0.5) * 16;
    
    const rotateX = ((y / rect.height) - 0.5) * -16;
    
    card.style.transform =
      `perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;
    
  });
  
  card.addEventListener("mouseleave", () => {
    
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    
  });
  
});


/*=========================================
        HEADER BLUR
=========================================*/

window.addEventListener("scroll", () => {
  
  const header = document.querySelector(".header");
  
  if (window.scrollY > 60) {
    
    header.style.background = "rgba(0,0,0,.85)";
    
  } else {
    
    header.style.background = "rgba(0,0,0,.55)";
    
  }
  
});
