import express from "express";
import { PortofolioController } from "../controllers/portofolio-controller";

export const apiRouter = express.Router();

apiRouter.get("/api/portofolios", PortofolioController.getAllItems);
