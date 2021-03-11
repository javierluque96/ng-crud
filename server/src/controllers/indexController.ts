import { Request, Response } from "express";

class IndexController {
  public index(req: Request, res: Response) {
    res.json({ text: "The API is in /api", apisAvailables: ["/games"] });
  }
}

export const indexController = new IndexController();
