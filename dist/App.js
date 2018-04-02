"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const CoffeeShopRouter_1 = require("./routes/CoffeeShopRouter");
// Create and configure an ExpressJS web server
class App {
    //Run configuration methods on the Express instance
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints
    routes() {
        this.express.use('/locations', CoffeeShopRouter_1.default);
        this.express.use('/locations/:id', CoffeeShopRouter_1.default);
        this.express.use('/locations/address/:address', CoffeeShopRouter_1.default);
    }
}
exports.default = new App().express;
