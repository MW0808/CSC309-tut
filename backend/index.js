import express from "express";
import routes from "./routes.js";
import cors from "cors";
import dotenv from "dotenv";
// TODO: complete me (loading the necessary packages)
dotenv.config();

// TODO: complete me (CORS)
const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: FRONTEND_URL,

    methods: ["GET", "POST", "PATCH", "DELETE"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: true,
  })
);


app.use(express.json());
app.use('', routes);

export default app;