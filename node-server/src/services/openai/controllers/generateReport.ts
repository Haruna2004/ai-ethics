import { Request, Response } from "express";

export const generateReport = async (req: Request, res: Response) => {
  // processs Ai Reports generation here
  return res.status(200).json({
    success: true,
  });
};
