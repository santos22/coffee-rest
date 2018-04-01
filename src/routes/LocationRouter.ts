import {Router, Request, Response, NextFunction} from 'express';
import { Coordinate } from "../Coordinate";
import * as Utils from '../Utils';

// JSON file holding locations data
const Locations = require('../../locations');

export class LocationRouter {
  router: Router

  // Initialize the LocationRouter
  constructor() {
    this.router = Router();
    this.init();
  }

  // GET all coffee shops
  public getCoffeeShops(req: Request, res: Response, next: NextFunction) {
    res.send(Locations);
  }

  // GET one coffee shop by id
  public getCoffeeShop(req: Request, res: Response, next: NextFunction) {
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

  // // GET nearest coffee shop
  // public findNearestCoffeeShop(req: Request, res: Response, next: NextFunction) {
  //   let query = parseInt(req.params.id);
  //   let coffeeShop = Locations.find(hero => hero.id === query);

  //   let nearestCoffeeShop = new Coordinate(coffeeShop.latitude, coffeeShop.longitude);
  //   console.log(Utils.getLineDistance(nearestCoffeeShop, nearestCoffeeShop)); // Should be 0

  //   if (coffeeShop) {
  //     res.status(200)
  //       .send({
  //         message: 'Success',
  //         status: res.status,
  //         coffeeShop
  //       });
  //   }
  //   else {
  //     res.status(404)
  //       .send({
  //         message: 'No coffee shop found with the given id.',
  //         status: res.status
  //       });
  //   }
  // }

  // Attach each handler to an Express.Router's endpoint
  init() {
    this.router.get('/', this.getCoffeeShops);
    this.router.get('/:id', this.getCoffeeShop);
  }

}

// Create LocationRouter and export its configured Express.Router
const locationRoutes = new LocationRouter();
locationRoutes.init();

export default locationRoutes.router;