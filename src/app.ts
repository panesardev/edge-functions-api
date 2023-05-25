import express from 'express';
import cors from 'cors';
import compression from 'compression';
import UsersController from './controllers/users.controller';

require('dotenv').config();

export default class App {

  private static instance: App;
  private express = express();

  private constructor() { }

  public static getInstance(): App {
    if (!App.instance) App.instance = new App();
    return App.instance;
  }

  run(port: number) {
    this.getExpress().listen(port, () => {
      console.log(`Express running at PORT:${port}`);
    });
  }

  getExpress() {
    this.express.use(compression());
    this.express.use(cors());
    this.express.use(express.json());

    this.useControllers();

    return this.express;
  }

  private useControllers() {
    this.express.use('/users', this.getUsersController().getRouter());
  }

  private getUsersController() {
    return new UsersController();
  }

}