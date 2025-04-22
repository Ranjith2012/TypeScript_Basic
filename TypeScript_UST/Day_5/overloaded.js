var emp = {
    details: function (name) {
        if (typeof name === "string") {
            return "Name is ".concat(name);
        }
        else {
            return "Age is ".concat(name);
        }
    }
};
console.log(emp.details("John Doe"));
console.log(emp.details(30));
