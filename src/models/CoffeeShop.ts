export class CoffeeShop {
    id: number;
    name: string;
    address: string;
    latitude: string;
    longitude: string;

    // Make a new instance of CoffeeShop
    // Assign the properties to it from PUT call and return
    static fromJSON(id: number, json: CoffeeShopJSON): CoffeeShop {
        let coffeeShop = Object.create(CoffeeShop.prototype);
        return Object.assign(coffeeShop, {id: id}, json);
    }
}

// A representation of CoffeeShop's data that can be
// converted to/from JSON without being altered
// http://choly.ca/post/typescript-json/
export interface CoffeeShopJSON {
    id: number;
    name: string;
    address: string;
    latitude: string;
    longitude: string;
}