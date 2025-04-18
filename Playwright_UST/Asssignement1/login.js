// function validation(){
//     const user = document.getElementById("username").value;
//     const pass = document.getElementById("password").value;
//     if (user === "user" && pass === "@123") {
//         alert("Hi welcome");
//         output.textContent = "Welcome!";
//         output.style.color = "green";
//     } 
//     else {
//         output.textContent = "Invalid credential";
//         output.style.color = "red";
//     }
// }

function store(){
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
  
        const formData = {
          name: form.name.value,
          role: form.role.value,
          Age: form.age.value
        };
        localStorage.setItem("formData", JSON.stringify(formData));

        window.location.href = "index1.html";
      });
}


function display(){
    const output = document.getElementById("output");
    const storedData = localStorage.getItem("formData");

    if (storedData) {
        const data = JSON.parse(storedData);
        output.innerHTML = `
             <p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Role:</strong> ${data.role}</p>
             <p><strong>Age:</strong> ${data.Age}</p>
        `;
    } else {
      output.textContent = "No data found.";
    }
}