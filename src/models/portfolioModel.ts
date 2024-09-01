import db from "../app/database";
import { PortfolioItem } from "../types/portfolio";

export class PortfolioModels {
  static async getAll(): Promise<PortfolioItem[]> {
    const connection = await db;
    const [rows] = await connection.query("SELECT * FROM portfolio_items");

    console.log(rows);
    return rows as PortfolioItem[];
  }
}
