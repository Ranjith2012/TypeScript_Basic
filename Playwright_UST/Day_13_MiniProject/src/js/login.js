document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
    if (username === "admin" && password === "admin123") {
      window.location.href = "productspage.html";  
    } else {
      errorMessage.textContent = "Invalid username or password. Please try again.";
      errorMessage.style.color = "red";  
    }
  });
  