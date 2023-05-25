import { Request, Response, Router } from "express";

export default class UsersController {

  private router = Router();

  getRouter() {
    this.router.get('/', this.findAll());

    return this.router;
  }

  private findAll() {
    return async (request: Request, response: Response) => {
      response.json([
        {
          name: 'Sukhpreet Singh',
          username: 'panesar.pbx8',
        }
      ]);
    }
  }


} 