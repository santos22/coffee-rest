import {Router, Request, Response, NextFunction} from 'express';
import { Coordinate } from "../Coordinate";
import { GeocodeService } from '../GeocodeService';
import * as Utils from '../Utils';

// JSON file holding locations data
var Locations = require('../../locations');

export class LocationRouter {
  router: Router
  // TODO Initialize GeocodeService one time and call when finding nearest coffee shop

  // Initialize the LocationRouter
  constructor() {
    this.router = Router();
    this.init();
  }

  // GET all coffee shops
  public getCoffeeShops(req: Request, res: Response, next: NextFunction) {
    console.log(Locations.length);
    res.send(Locations);
  }

  // GET one coffee shop by id
  public getCoffeeShop(req: Request, res: Response, next: NextFunction) {
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
  public deleteCoffeeShop(req: Request, res: Response, next: NextFunction) {
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

// Create LocationRouter and export its configured Express.Router
const locationRoutes = new LocationRouter();
locationRoutes.init();

export default locationRoutes.router;