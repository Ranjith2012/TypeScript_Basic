function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div class="cart-item-details">
          <h3 class="cart-item-title">${item.name}</h3>
          <p class="cart-item-price">$${item.price}</p>
          <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      `;
        cartItemsContainer.appendChild(div);
    });

    displayCartSummary(cart);
}

function displayCartSummary(cart) {
    const summary = document.getElementById('cartSummary');
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    summary.innerHTML = `
  <div class="card p-3">
    <h5>Summary</h5>
    <p><strong>Total Items:</strong> ${totalItems}</p>
    <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
    <a href="./checkout.html" class="btn btn-success mt-3">Proceed to Checkout</a>
  </div>
`;
}


function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id != productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}


document.addEventListener('DOMContentLoaded', loadCart);
