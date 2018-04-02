"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// JSON file holding locations data
var Locations = require('../../locations');
class LocationRouter {
    // TODO Initialize GeocodeService one time and call when finding nearest coffee shop
    // Initialize the LocationRouter
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    // GET all coffee shops
    getCoffeeShops(req, res, next) {
        console.log(Locations.length);
        res.send(Locations);
    }
    // GET one coffee shop by id
    getCoffeeShop(req, res, next) {
        let query = parseInt(req.params.id);
        let coffeeShop = Locations.find(coffeeShop => coffeeShop.id === query);
        if (coffeeShop) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                coffeeShop
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No coffee shop found with the given id.',
                status: res.status
            });
        }
    }
    // DELETE one coffee shop by id
    deleteCoffeeShop(req, res, next) {
        let query = parseInt(req.params.id);
        let coffeeShop = Locations.find(coffeeShop => coffeeShop.id === query);
        for (var i = 0; i < Locations.length; i++) {
            if (query === Locations[i].id) {
                // Remove coffee shop from list of coffee shops
                Locations.splice(i, 1);
            }
        }
        if (coffeeShop) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                coffeeShop
            });
        }
        else {
            res.status(404)
                .send({
                message: 'No coffee shop found with the given id.',
                status: res.status
            });
        }
    }
    // Attach each handler to an Express.Router's endpoint
    init() {
        this.router.get('/', this.getCoffeeShops);
        this.router.get('/:id', this.getCoffeeShop);
        this.router.delete('/:id', this.deleteCoffeeShop);
    }
}
exports.LocationRouter = LocationRouter;
// Create LocationRouter and export its configured Express.Router
const locationRoutes = new LocationRouter();
locationRoutes.init();
exports.default = locationRoutes.router;
