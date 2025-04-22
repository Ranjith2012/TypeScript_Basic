"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addproduct = addproduct;
exports.listTasks = listTasks;
var class1_1 = require("./class1");
function addproduct(description) {
    var newTask = {
        id: class1_1.values.length + 1,
        description: description,
        completed: false,
    };
    class1_1.values.push(newTask);
    console.log("Task added: \"".concat(description, "\""));
}
function listTasks() {
    console.log("Your Tasks:");
    class1_1.values.forEach(function (product) {
        console.log("[".concat(product.completed ? '✔' : ' ', "] ").concat(product.id, ": ").concat(product.description));
    });
}
