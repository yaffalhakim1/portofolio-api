import { Request, Response, NextFunction } from "express";
import { PortfolioModels } from "../models/portfolioModel";

export class PortofolioController {
  static async getAllItems(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const items = await PortfolioModels.getAll();
      res.json(items);
    } catch (error) {
      next(error);
    }
  }
}
