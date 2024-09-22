import { Router } from "express";
import { aiRouter } from "../services/openai/route";

export const appRouter = Router();

appRouter.use("/ai", aiRouter);

appRouter.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "API is up and running!",
    version: "1.0",
  });
});
