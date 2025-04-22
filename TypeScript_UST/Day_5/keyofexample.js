var x;
x = "name";
x = "age";
var person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890"
};
var newemp = {
    name: "Jane Smith",
    department: "Engineering",
    salary: 80000
};
//generic function to get data from object
function getData(obj, key) {
    return obj[key];
}
console.log(getData(person, "name"));
console.log(getData(person, "age"));
console.log(getData(person, "address"));
console.log(getData(newemp, "name"));
console.log(getData(newemp, "department"));
console.log(getData(newemp, "salary"));
//Reduce Function
function sum1() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (t, num) { return t + num; }, 0);
}
function addstring() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names.reduce(function (t, name) { return t + name; }, "");
}
var result = sum1(1, 2, 3, 4, 5);
console.log(result);
var result1 = addstring("John", "Doe", "Smith");
console.log(result1);
