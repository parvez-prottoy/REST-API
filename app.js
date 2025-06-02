import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (_, res) => {
  res.sendFile(__dirname + "/src/views/index.html");
});
// route not found
app.use((_, res) => {
  res.status(404).send("Route not found");
});
// server error
app.use((err, _, res) => {
  res.status(500).send(err.message);
});

export default app;
