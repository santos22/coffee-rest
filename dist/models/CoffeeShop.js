"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoffeeShop {
    // Make a new instance of CoffeeShop
    // Assign the properties to it from PUT call and return
    static fromJSON(id, json) {
        let coffeeShop = Object.create(CoffeeShop.prototype);
        return Object.assign(coffeeShop, { id: id }, json);
    }
}
exports.CoffeeShop = CoffeeShop;
