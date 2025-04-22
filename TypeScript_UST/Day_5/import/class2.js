"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class1_1 = require("../export/class1");
var addProduct_1 = require("../export/addProduct");
var obj = new class1_1.A();
function getDeatils(id) {
    console.log(obj.getName(id));
    console.log((0, class1_1.getHomeDetails)(id));
}
getDeatils("1");
getDeatils("2");
function callProduct() {
    (0, addProduct_1.addproduct)("Product 1");
    (0, addProduct_1.addproduct)("Product 2");
    (0, addProduct_1.listTasks)();
}
callProduct();
