function validate(){
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const role = document.getElementById("role").value.trim().toLowerCase();
    const salary = document.getElementById("salary").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name.length < 3) {
        errors("Name must be at least 3 characters long.");
        return;
    }

    if (age < 18 || isNaN(age)) {
        errors("Age must be greater than 18.");
        return;
    }

    let trainerRole = role === 'trainer' ? 'admin' : 'user';

    if (!email.endsWith("@gmail.com")) {
        errors("Invalid email format.");
        return;
    }

    if (!phone.startsWith('+') || phone.length !== 13) {
        errors("Phone number must include a country code and be 10 digits long after it.");
        return;
    }

    localStorage.setItem("userData", JSON.stringify({
        name,
        age,
        role: trainerRole,
        salary,
        email,
        phone
    }));

    window.location.href = "taskdis.html";

}

function display(){
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        const heading = userData.role === 'admin' ? "Admin Dashboard" : "User Dashboard";

        document.getElementById("dis").innerHTML = `
          <h2>${heading}</h2>
          <table border="1" cellpadding="8" cellspacing="0">
            <tr><th>Field</th><th>Value</th></tr>
            <tr><td><strong>Name</strong></td><td>${userData.name}</td></tr>
            <tr><td><strong>Age</strong></td><td>${userData.age}</td></tr>
            <tr><td><strong>Role</strong></td><td>${userData.role}</td></tr>
            <tr><td><strong>Salary</strong></td><td>${userData.salary}</td></tr>
            <tr><td><strong>Email</strong></td><td>${userData.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${userData.phone}</td></tr>
          </table>
        `;
    } else {
        document.getElementById("dis").innerHTML = "<p>No data found. Please submit the form first.</p>";
    }

}

function errors(msg){
    document.getElementById("result").innerHTML=msg;
}