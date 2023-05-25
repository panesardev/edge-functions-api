import express from 'express';
import cors from 'cors';
import compression from 'compression';
import UsersController from './controllers/users.controller';

require('dotenv').config();

export default class App {

  private express = express();

  run(port: number) {
    this.express.use(compression());
    this.express.use(cors());
    this.express.use(express.json());

    this.useControllers();

    this.express.listen(port, () => {
      console.log(`Express running at PORT:${port}`);
    });
  }

  private useControllers() {
    this.express.use(this.getUsersController().getRouter());
  }

  private getUsersController() {
    return new UsersController();
  }

  getExpress() {
    return this.express;
  }

}