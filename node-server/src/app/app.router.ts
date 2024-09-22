import { Router } from "express";

export const appRouter = Router();

// appRouter.use("/vm", vmRouter)

appRouter.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "API is up and running!",
    version: "1.0",
  });
});
