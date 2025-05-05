function handleCheckoutFormSubmit(event) {
    event.preventDefault(); 
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!fullName || !phone || !city || !paymentMethod) {
      alert('Please fill in all the fields');
      return;
    }
    localStorage.setItem('orderFullName', fullName);
    localStorage.setItem('orderPhone', phone);
    localStorage.setItem('orderCity', city);
    localStorage.setItem('orderPayment', paymentMethod);
    window.location.href = 'ordersuccesspage.html';
  }
  

  function displayOrderDetails() {

    const fullName = localStorage.getItem('orderFullName');
    const phone = localStorage.getItem('orderPhone');
    const city = localStorage.getItem('orderCity');
    const paymentMethod = localStorage.getItem('orderPayment');

    if (!fullName || !phone || !city || !paymentMethod) {
      window.location.href = 'checkout.html';
      return;
    }
  

    document.getElementById('orderFullName').textContent = fullName;
    document.getElementById('orderPhone').textContent = phone;
    document.getElementById('orderCity').textContent = city;
    document.getElementById('orderPayment').textContent = paymentMethod;
  }

  if (window.location.pathname.includes('checkout.html')) {

    document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutFormSubmit);
  } else if (window.location.pathname.includes('ordersuccesspage.html')) {
    displayOrderDetails();
  }
  