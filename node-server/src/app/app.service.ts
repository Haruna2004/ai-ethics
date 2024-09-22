import express from "express";
import cors from "cors";
import { corsOptions, envConfig } from "../core/config";
import { appRouter } from "./app.router";

export const app = express();

app.use(express.json());
// Enable Cross-Origin Resource Sharing (CORS) with predefined options.
app.use(cors(corsOptions));

app.use("/api/v1", appRouter);

process.on("SIGINT", async () => {
  process.exit();
});
