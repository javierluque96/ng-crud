import { Request, Response } from "express";
import db from "../database";

class GamesController {
  public async getAll(req: Request, res: Response) {
    const games = await db.query("SELECT * FROM game");
    res.json(games);
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await db.query("SELECT * FROM game WHERE id = ?", [id]);
    console.log(games);
    if (games.length > 0) {
      return res.json(games[0]);
    }
    res.status(404).json("The game doesn't exists");
  }

  public async create(req: Request, res: Response): Promise<void> {
    await db.query("INSERT INTO game set ?", [req.body]);
    res.json({ message: "Game saved" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("DELETE FROM game WHERE id = ?", [id]);
    res.json({ message: "Game deleted" });
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await db.query("UPDATE game SET ? WHERE id = ?", [req.body, id]);
    res.json({ message: "Game updated"});
  }
}

export const gamesController = new GamesController();
