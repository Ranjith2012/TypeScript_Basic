// Sample product data
const products = [
  {
    "id": 1,
    "title": "Face Cream",
    "description": "A moisturizing face cream for daily use to keep your skin smooth and hydrated.",
    "price": "$24.99",
    "image": "./img/face-cream.png"
  },
  {
    "id": 2,
    "title": "Lipstick",
    "description": "Long-lasting and smooth lipstick in various shades to match your style.",
    "price": "$14.99",
    "image": "./img/lipstick.png"
  },
  {
    "id": 3,
    "title": "Eye Shadow Palette",
    "description": "A variety of bold and neutral shades for every occasion.",
    "price": "$29.99",
    "image": "./img/eyeshadow.png"
  },
  {
    "id": 4,
    "title": "Foundation",
    "description": "Lightweight foundation with buildable coverage for a flawless complexion.",
    "price": "$34.99",
    "image": "./img/foundation.png"
  },
  {
    "id": 5,
    "title": "Mascara",
    "description": "Volume-boosting mascara for fuller lashes that last all day.",
    "price": "$18.99",
    "image": "./img/mascara.png"
  },
  {
    "id": 6,
    "title": "Blush",
    "description": "A soft, blendable blush that gives your cheeks a natural flush of color.",
    "price": "$16.99",
    "image": "./img/blush.png"
  },
  {
    "id": 7,
    "title": "Nail Polish",
    "description": "High-gloss, chip-resistant nail polish available in a variety of vibrant colors.",
    "price": "$9.99",
    "image": "./img/nailpolish.png"
  },
  {
    "id": 8,
    "title": "Face Mask",
    "description": "Revitalizing face mask to hydrate and refresh your skin.",
    "price": "$22.99",
    "image": "./img/facemask.png"
  }

];


function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}


function updateCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  document.getElementById("cartCount").textContent = cart.length;
}


function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;
  img.className = "product-image";

  const title = document.createElement("div");
  title.className = "product-title";
  title.textContent = product.title;

  const description = document.createElement("div");
  description.className = "product-description";
  description.textContent = product.description;

  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = product.price;

  const button = document.createElement("button");
  button.className = "add-to-cart-btn";


  const cart = getCart();
  const isProductInCart = cart.some(item => item.id === product.id);

  if (isProductInCart) {
    button.textContent = "Remove from Cart";
    button.onclick = () => removeFromCart(product);
  } else {
    button.textContent = "Add to Cart";
    button.onclick = () => addToCart(product);
  }

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(button);

  return card;
}


function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  updateCart(cart);
  alert(`${product.title} added to cart.`);
  refreshProductCard(product.id);
}

function removeFromCart(product) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== product.id);
  updateCart(cart);
  alert(`${product.title} removed from cart.`);
  refreshProductCard(product.id);
}


function refreshProductCard(productId) {
  const grid = document.getElementById("productGrid");
  const product = products.find(p => p.id === productId);
  const oldCard = [...grid.children].find(card => {
    return card.querySelector(".product-title").textContent === product.title;
  });
  const newCard = createProductCard(product);
  grid.replaceChild(newCard, oldCard);
}


document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  products.forEach(product => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
  updateCartCount();
});

function navigateToCart() {
  window.location.href = "cart.html";
}
