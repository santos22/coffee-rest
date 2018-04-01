"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Locations = require('../../locations');
class LocationRouter {
    // Initialize the LocationRouter
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    // GET all coffee shops
    getCoffeeShops(req, res, next) {
        res.send(Locations);
    }
    // GET one coffee shop by id
    getCoffeeShop(req, res, next) {
        let query = parseInt(req.params.id);
        let coffeeShop = Locations.find(hero => hero.id === query);
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
    }
}
exports.LocationRouter = LocationRouter;
// Create LocationRouter and export its configured Express.Router
const locationRoutes = new LocationRouter();
locationRoutes.init();
exports.default = locationRoutes.router;
