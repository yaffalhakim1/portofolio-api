import express from "express";
import { apiRouter } from "../routes/api";
import { errorMiddleware } from "../middleware/error-middleware";

export const web = express();
web.use(express.json());
web.use(apiRouter);
web.use(errorMiddleware);
