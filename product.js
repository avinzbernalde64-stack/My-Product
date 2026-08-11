// ================================
// VINJI PRODUCTS.JS
// ================================

// Get Elements
const searchInput = document.getElementById("search");
const productCards = document.querySelectorAll(".product-card");
const categoryButtons = document.querySelectorAll(".categories button");

// ================================
// SEARCH PRODUCTS
// ================================

if (searchInput) {
  
  searchInput.addEventListener("keyup", function() {
    
    let value = this.value.toLowerCase();
    
    productCards.forEach(card => {
      
      let productName = card.querySelector("h3").textContent.toLowerCase();
      
      if (productName.includes(value)) {
        
        card.style.display = "block";
        
      } else {
        
        card.style.display = "none";
        
      }
      
    });
    
  });
  
}

// ================================
// CATEGORY FILTER
// ================================

categoryButtons.forEach(button => {
  
  button.addEventListener("click", function() {
    
    // Active Button
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    
    const category = this.textContent.toLowerCase();
    
    productCards.forEach(card => {
      
      const name = card.querySelector("h3").textContent.toLowerCase();
      
      if (category === "all") {
        
        card.style.display = "block";
        
      } else if (
        category === "t-shirts" && name.includes("tee")
      ) {
        
        card.style.display = "block";
        
      } else if (
        category === "hoodies" && name.includes("hoodie")
      ) {
        
        card.style.display = "block";
        
      } else if (
        category === "jackets" && name.includes("jacket")
      ) {
        
        card.style.display = "block";
        
      } else if (
        category === "pants" && name.includes("pants")
      ) {
        
        card.style.display = "block";
        
      } else if (
        category === "caps" && name.includes("cap")
      ) {
        
        card.style.display = "block";
        
      } else {
        
        card.style.display = "none";
        
      }
      
    });
    
  });
  
});

// ================================
// ADD TO CART
// ================================

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {
  
  button.addEventListener("click", () => {
    
    const card = button.parentElement;
    
    const name = card.querySelector("h3").innerText;
    
    const price = card.querySelector(".price").innerText;
    
    const image = card.parentElement.querySelector("img").src;
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cart.push({
      
      id: Date.now(),
      
      name: name,
      
      price: price,
      
      image: image,
      
      quantity: 1
      
    });
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    alert(name + " has been added to your cart!");
    
  });
  
});

// ================================
// PRODUCT HOVER EFFECT
// ================================

productCards.forEach(card => {
  
  card.addEventListener("mouseenter", () => {
    
    card.style.transform = "translateY(-10px)";
    card.style.transition = ".3s";
    
  });
  
  card.addEventListener("mouseleave", () => {
    
    card.style.transform = "translateY(0px)";
    
  });
  
});

// ================================
// PRODUCT IMAGE ZOOM
// ================================

document.querySelectorAll(".product-card img").forEach(img => {
  
  img.addEventListener("mouseenter", () => {
    
    img.style.transform = "scale(1.08)";
    img.style.transition = ".4s";
    
  });
  
  img.addEventListener("mouseleave", () => {
    
    img.style.transform = "scale(1)";
    
  });
  
});

// ================================
// PAGINATION BUTTONS
// ================================

const pages = document.querySelectorAll(".pagination button");

pages.forEach(page => {
  
  page.addEventListener("click", function() {
    
    pages.forEach(btn => btn.classList.remove("active"));
    
    this.classList.add("active");
    
    window.scrollTo({
      
      top: 0,
      
      behavior: "smooth"
      
    });
    
  });
  
});

// ================================
// NEWSLETTER
// ================================

const newsletterBtn = document.querySelector(".shop-newsletter button");

if (newsletterBtn) {
  
  newsletterBtn.addEventListener("click", () => {
    
    const email = document.querySelector(".shop-newsletter input").value;
    
    if (email === "") {
      
      alert("Please enter your email.");
      
      return;
      
    }
    
    alert("Thank you for subscribing to VINJI!");
    
    document.querySelector(".shop-newsletter input").value = "";
    
  });
  
}

// ================================
// IMAGE GALLERY
// ================================

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    
    mainImage.src = thumb.src;
    
    thumbs.forEach(img => img.classList.remove("active"));
    
    thumb.classList.add("active");
    
  });
});


// ================================
// SIZE SELECTOR
// ================================

const sizes = document.querySelectorAll(".sizes button");

sizes.forEach((size) => {
  
  size.addEventListener("click", () => {
    
    sizes.forEach(btn => btn.classList.remove("active"));
    
    size.classList.add("active");
    
  });
  
});


// ================================
// COLOR SELECTOR
// ================================

const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  
  color.addEventListener("click", () => {
    
    colors.forEach(c => c.classList.remove("active"));
    
    color.classList.add("active");
    
  });
  
});


// ================================
// QUANTITY
// ================================

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const qty = document.getElementById("qty");

plus.onclick = () => {
  
  qty.value = Number(qty.value) + 1;
  
};

minus.onclick = () => {
  
  if (Number(qty.value) > 1) {
    
    qty.value = Number(qty.value) - 1;
    
  }
  
};


// ================================
// ADD TO CART
// ================================

const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", () => {
  
  const selectedSize =
    document.querySelector(".sizes .active")?.textContent || "M";
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  cart.push({
    
    name: "VINJ Signature Tee",
    
    price: 899,
    
    image: "images/front-shirt.png",
    
    size: selectedSize,
    
    quantity: Number(qty.value)
    
  });
  
  localStorage.setItem("cart", JSON.stringify(cart));
  
  alert("Added to cart!");
  
});


// ================================
// BUY NOW
// ================================

const buyBtn = document.getElementById("buyBtn");

buyBtn.onclick = () => {
  
  document.getElementById("cartBtn").click();
  
  window.location.href = "cart.html";
  
};
