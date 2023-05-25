import express from 'express';
import cors from 'cors';
import compression from 'compression';

require('dotenv').config();

export default class App {

  private express = express();

  private useRouters() {
    
  }
  
  run(port: number) {
    this.express.use(compression());
    this.express.use(cors());
    this.express.use(express.json());

    this.useRouters();

    this.express.listen(port, () => {
      console.log(`Express running at PORT:${port}`);
    });
  }

  getExpress() {
    return this.express;
  }

}