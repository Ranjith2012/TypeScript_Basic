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
var product1 = {
    products: function (idOrName) {
        if (typeof idOrName === "number") {
            return "ID of product is ".concat(idOrName);
        }
        else {
            return "Product name is ".concat(idOrName);
        }
    }
};
console.log(product1.products(101));
console.log(product1.products("Laptop"));
