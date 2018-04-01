import LocationRouter from './routes/LocationRouter';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

// Create and configure an ExpressJS web server
class App {

  // Reference to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints
  private routes(): void {
    this.express.use('/locations', LocationRouter);
    this.express.use('/locations/:id', LocationRouter);
  }

}

export default new App().express;