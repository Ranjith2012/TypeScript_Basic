"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
exports.getHomeDetails = getHomeDetails;
var A = /** @class */ (function () {
    function A() {
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
