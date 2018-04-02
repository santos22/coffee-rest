"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoffeeShop {
    /**
     * fromJSON() returns a new CoffeeShop object
     * with copied property values from PUT request
     */
    static fromJSON(id, json) {
        let coffeeShop = Object.create(CoffeeShop.prototype);
        return Object.assign(coffeeShop, { id: id }, json);
    }
}
exports.CoffeeShop = CoffeeShop;
