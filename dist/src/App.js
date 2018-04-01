"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocationRouter_1 = require("./routes/LocationRouter");
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
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
        this.express.use('/locations', LocationRouter_1.default);
        this.express.use('/locations/:id', LocationRouter_1.default);
    }
}
exports.default = new App().express;
