import { Router } from "express";
import { generateReport } from "./controllers/generateReport";

export const aiRouter = Router();

aiRouter.post("/get-report", generateReport);
