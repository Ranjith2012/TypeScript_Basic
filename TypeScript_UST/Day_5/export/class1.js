"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = exports.values = void 0;
exports.getHomeDetails = getHomeDetails;
exports.values = [];
var A = /** @class */ (function () {
    function A() {
        this.name = "hi";
        this.age = 20;
    }
    A.prototype.getName = function (id) {
        return id === "1" ? "John Doe" : "Jane Smith";
    };
    return A;
}());
exports.A = A;
// export function getName(id:string): string {
//     return id === "1" ? "John Doe" : "Jane Smith";
// }
function getHomeDetails(id) {
    return id === "1" ? "New York" : "Los Angeles";
}
