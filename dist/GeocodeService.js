"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maps_1 = require("@google/maps");
const Coordinate_1 = require("../src/models/Coordinate");
class GeocodeService {
    // Initialize the Google Maps Client
    constructor(address) {
        this.googleMapsClient = maps_1.GoogleMapsClient.createClient({
            key: 'API-KEY-HERE'
        });
        this.coffeeShop = new Coordinate_1.Coordinate();
    }
    // Geocode an address
    geocode(address, callback) {
        this.googleMapsClient.geocode({
            address: address
        }, function (err, response) {
            if (!err) {
                console.log(response.json.results[0].geometry.location.lat);
                console.log(response.json.results[0].geometry.location.lng);
                callback({
                    Latitude: response.json.results[0].geometry.location.lat,
                    Longitude: response.json.results[0].geometry.location.lng
                });
            }
        });
    }
}
exports.GeocodeService = GeocodeService;
