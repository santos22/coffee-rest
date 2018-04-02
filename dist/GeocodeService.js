"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maps_1 = require("@google/maps");
class GeocodeService {
    //coffeeShop: Coordinate
    // Initialize the Google Maps Client
    constructor(key) {
        this.googleMapsClient = maps_1.GoogleMapsClient.createClient({
            key: key
        });
        //this.coffeeShop = new Coordinate();
    }
}
exports.GeocodeService = GeocodeService;
