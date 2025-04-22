var x;
var person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890"
};
//generic function to get data from object
function getData(obj, key) {
    return obj[key];
}
console.log(getData(person, "name"));

//Reduce Function
function sum(numbers) {
    return numbers.reduce(function (t, num) { return t + num; }, 0);
}
var result = sum([1, 2, 3, 4, 5]);
console.log(result);
