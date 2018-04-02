"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CoffeeShop_1 = require("../models/CoffeeShop");
// JSON file holding coffee shop location data
var CoffeeShops = require('../../locations');
// Create new coffee shops starting with this id
var ID = 57;
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAbXIUcX-k-QiiIM_2urXqwQZulWQ0PrlM'
});
class CoffeeShopRouter {
    // Initialize the CoffeeShopRouter
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    // POST endpoint for creating a new coffee shop
    createCoffeeShop(req, res, next) {
        let coffeeShop = CoffeeShop_1.CoffeeShop.fromJSON(ID++, req.body);
        CoffeeShops.push(coffeeShop);
        if (coffeeShop) {
            res.status(200)
                .send({
                message: 'Success',
                status: res.status,
                coffeeShop
            });
        }
        else {
            res.status(400)
                .send({
                message: 'Unable to create coffee shop.',
                status: res.status
            });
        }
    }
    // GET endpoint for returning all coffee shops
    getCoffeeShops(req, res, next) {
        res.send(CoffeeShops);
    }
    // GET endpoint for returning one coffee shop by id
    getCoffeeShop(req, res, next) {
        let query = parseInt(req.params.id);
        let coffeeShop = CoffeeShops.find(coffeeShop => coffeeShop.id === query);
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
    getNearestCoffeeShop(req, res, next) {
        console.log('getNearestCoffeeShop');
        let query = req.params.address;
        //let coffeeShop = CoffeeShops.find(hero => hero.id === query);
        console.log(req.params.address);
        googleMapsClient.geocode({
            address: '1600 Amphitheatre Parkway, Mountain View, CA'
        }, function (err, response) {
            if (!err) {
                console.log(response.json.results);
            }
        });
        //let nearestCoffeeShop = new Coordinate(coffeeShop.latitude, coffeeShop.longitude);
        //console.log(Utils.getLineDistance(nearestCoffeeShop, nearestCoffeeShop)); // Should be 0
        //let geocodeService = new GeocodeService('986 Market St, San Francisco, CA 94102, USA');
        //geocodeService.geocode();
        // if (coffeeShop) {
        //   res.status(200)
        //     .send({
        //       message: 'Success',
        //       status: res.status,
        //       coffeeShop
        //     });
        // }
        // else {
        //   res.status(404)
        //     .send({
        //       message: 'No coffee shop found with the given id.',
        //       status: res.status
        //     });
        // }
    }
    // DELETE endpoint for deleting one coffee shop by id
    deleteCoffeeShop(req, res, next) {
        let query = parseInt(req.params.id);
        let coffeeShop = CoffeeShops.find(coffeeShop => coffeeShop.id === query);
        if (coffeeShop) {
            for (var i = 0; i < CoffeeShops.length; i++) {
                if (query === CoffeeShops[i].id) {
                    // Remove coffee shop from list of coffee shops
                    CoffeeShops.splice(i, 1);
                }
            }
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
    // PUT endpoint for updating a new coffee shop
    updateCoffeeShop(req, res, next) {
        let query = parseInt(req.params.id);
        let coffeeShop = CoffeeShops.find(coffeeShop => coffeeShop.id === query);
        if (coffeeShop) {
            coffeeShop.name = req.body.name;
            coffeeShop.address = req.body.address;
            coffeeShop.latitude = req.body.latitude;
            coffeeShop.longitude = req.body.longitude;
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
        this.router.post('/', this.createCoffeeShop);
        this.router.get('/', this.getCoffeeShops);
        this.router.get('/:id', this.getCoffeeShop);
        this.router.get('address/:address', this.getNearestCoffeeShop);
        this.router.delete('/:id', this.deleteCoffeeShop);
        this.router.put('/:id', this.updateCoffeeShop);
    }
}
exports.CoffeeShopRouter = CoffeeShopRouter;
// Create CoffeeShopRouter and export its configured Express.Router
const coffeeShops = new CoffeeShopRouter();
coffeeShops.init();
exports.default = coffeeShops.router;
