// ==========================================
// VINJ Luxury Streetwear
// script.js
// ==========================================

// ===========================
// SHARED CART LOGIC
// ===========================
// These functions are shared across index.html, view-product.html, and cart.html

function getCart() {
  let cart = localStorage.getItem('vinjCart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('vinjCart', JSON.stringify(cart));
  updateCartCounter();
}

function updateCartCounter() {
  const cart = getCart();
  // Calculate total quantity of items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countSpan = document.getElementById('cartCount');
  if (countSpan) {
    countSpan.innerText = totalItems;
  }
}

// Initialize cart count on every page load
document.addEventListener('DOMContentLoaded', updateCartCounter);


// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});

// ===========================
// Navbar Shadow
// ===========================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 30) {

    header.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

  } else {

    header.style.boxShadow = "none";

  }

});

// ===========================
// Fade In Animation
// ===========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

    }

  });

}, {
  threshold: .15
});

document.querySelectorAll(".card,.banner,.newsletter").forEach(item => {

  item.classList.add("hidden");

  observer.observe(item);

});

// ===========================
// NOTIFICATION (Kept in case you want to use it later)
// ===========================

function showNotification(productName) {

  const notification = document.createElement("div");

  notification.className = "notification";

  notification.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${productName} added to cart</span>
    `;

  document.body.appendChild(notification);

  setTimeout(() => {

    notification.classList.add("show");

  }, 100);

  setTimeout(() => {

    notification.classList.remove("show");

    setTimeout(() => {

      notification.remove();

    }, 400);

  }, 2500);

}

// ==========================================
// HERO BUTTON HOVER EFFECT
// ==========================================

const heroButtons = document.querySelectorAll(".btn, .btn-outline");

heroButtons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-3px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0)";

  });

});

// ==========================================
// PRODUCT CARD HOVER
// ==========================================

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});

// ==========================================
// NEWSLETTER
// ==========================================

const form = document.querySelector(".newsletter form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = form.querySelector("input").value.trim();

    if (email === "") {

      alert("Please enter your email.");

      return;

    }

    alert("Thank you for subscribing to VINJ!");

    form.reset();

  });

}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "<i class='fa-solid fa-arrow-up'></i>";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    topBtn.style.display = "flex";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

  console.log("Welcome to VINJ Clothing");

});