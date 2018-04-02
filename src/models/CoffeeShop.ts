export class CoffeeShop {
    id: number;
    name: string;
    address: string;
    latitude: string;
    longitude: string;

    /**
     * fromJSON() returns a new CoffeeShop object
     * with copied property values from PUT request
     */
    static fromJSON(id: number, json: CoffeeShopJSON): CoffeeShop {
        let coffeeShop = Object.create(CoffeeShop.prototype);
        return Object.assign(coffeeShop, {id: id}, json);
    }
}

/**
 * CoffeeShopJSON is a representation of
 * CoffeeShop's data that can be
 * converted to/from JSON without being altered
 * http://choly.ca/post/typescript-json/
 */
export interface CoffeeShopJSON {
    id: number;
    name: string;
    address: string;
    latitude: string;
    longitude: string;
}