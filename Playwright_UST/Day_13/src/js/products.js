// Sample product data
const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is a short description of Product 1.",
      price: "$19.99"
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is a short description of Product 2.",
      price: "$29.99"
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is a short description of Product 3.",
      price: "$15.00"
    }
  ];
  
  // Function to create a product card element
  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
  
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
    button.textContent = "Add to Cart";
    button.onclick = () => addToCart(product);
  
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(button);
  
    return card;
  }
  
  // Simple cart array
  const cart = [];
  
  // Add to cart function
  function addToCart(product) {
    cart.push(product);
    alert(`${product.title} added to cart.`);
    // You can log or store the cart as needed
    console.log(cart);
  }
  
  // Load products on page load
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("productGrid");
    products.forEach(product => {
      const card = createProductCard(product);
      grid.appendChild(card);
    });
  });
  