var data1 = [{ name: "rash", department: "EEE" }];
data1.forEach(function (e) { return console.log("Name".concat(e.name, ", ").concat(e.department)); });
var Vendor = /** @class */ (function () {
    function Vendor(id, name, location) {
        this.id = id;
        this.name = name;
        this.location = location;
    }
    return Vendor;
}());
var vendors = [
    new Vendor(3, "naveen", "covai"),
    new Vendor(1, "abden", "kochi"),
    new Vendor(2, "ranjith", "Covai")
];
var sortedVendors = vendors.sort(function (a, b) { return a.id > b.id ? -1 : 0; });
for (var _i = 0, sortedVendors_1 = sortedVendors; _i < sortedVendors_1.length; _i++) {
    var vendor = sortedVendors_1[_i];
    console.log("ID: ".concat(vendor.id, ", Name: ").concat(vendor.name, ", Location: ").concat(vendor.location));
}
//return type
function sortVen() {
    return vendors.sort(function (a, b) { return a.id > b.id ? -1 : 0; });
}
sortVen();
