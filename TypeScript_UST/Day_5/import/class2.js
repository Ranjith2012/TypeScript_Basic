"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class1_1 = require("../export/class1");
var obj = new class1_1.A();
function getDeatils(id) {
    console.log(obj.getName(id));
    console.log((0, class1_1.getHomeDetails)(id));
}
getDeatils("1");
getDeatils("2");
