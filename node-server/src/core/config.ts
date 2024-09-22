import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  port: process.env.PORT || 3000,
};

const allowedMethods = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"];

export const allowedOrigins = [
  "http://localhost:3000",
  "http://*",
  "https://*",
];

const allowedHeaders = ["Content-Type", "Authorization"];

export const corsOptions = {
  methods: allowedMethods,
  allowedHeaders,
  origin: allowedOrigins,
  credentials: true,
};
