// ===============================
// VINJI CART.JS
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

const SHIPPING = 10;

// ===============================
// DISPLAY CART
// ===============================

function displayCart() {
  
  cartItems.innerHTML = "";
  
  if (cart.length === 0) {
    
    cartItems.innerHTML = `
            <div style="text-align:center;padding:50px;">
                <h2>Your cart is empty.</h2>
                <br>
                <a href="shop.html">
                    <button class="checkout">
                        Continue Shopping
                    </button>
                </a>
            </div>
        `;
    
    subtotal.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    
    return;
    
  }
  
  let sub = 0;
  
  cart.forEach((item, index) => {
    
    let price = parseFloat(item.price.replace("$", ""));
    
    let qty = parseInt(item.quantity);
    
    if (isNaN(qty)) qty = 1;
    
    sub += price * qty;
    
    cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div class="item-info">

                <h3>${item.name}</h3>

                <p class="item-price">$${price.toFixed(2)}</p>

            </div>

            <div class="qty">

                <button onclick="decrease(${index})">-</button>

                <span>${qty}</span>

                <button onclick="increase(${index})">+</button>

            </div>

            <button class="remove"
            onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;
    
  });
  
  subtotal.innerHTML = "$" + sub.toFixed(2);
  
  total.innerHTML = "$" + (sub + SHIPPING).toFixed(2);
  
}

// ===============================
// INCREASE QUANTITY
// ===============================

function increase(index) {
  
  cart[index].quantity++;
  
  saveCart();
  
}

// ===============================
// DECREASE QUANTITY
// ===============================

function decrease(index) {
  
  if (cart[index].quantity > 1) {
    
    cart[index].quantity--;
    
  }
  
  saveCart();
  
}

// ===============================
// REMOVE ITEM
// ===============================

function removeItem(index) {
  
  if (confirm("Remove this product?")) {
    
    cart.splice(index, 1);
    
    saveCart();
    
  }
  
}

// ===============================
// SAVE
// ===============================

function saveCart() {
  
  localStorage.setItem(
    
    "cart",
    
    JSON.stringify(cart)
    
  );
  
  displayCart();
  
}

// ===============================
// CHECKOUT
// ===============================

const checkoutBtn = document.querySelector(".checkout");

if (checkoutBtn) {
  
  checkoutBtn.addEventListener("click", () => {
    
    if (cart.length == 0) {
      
      alert("Your cart is empty.");
      
      return;
      
    }
    
    alert("Thank you for shopping at VINJI!");
    
    localStorage.removeItem("cart");
    
    location.reload();
    
  });
  
}

// ===============================
// LOAD
// ===============================

displayCart();
