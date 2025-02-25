import cors from "cors";
import express from "express";
import { PORT } from "./config";
import { buildDependencies } from "./dependencies";
import booksRoutes from "./routes/books";

const app = express();

// Build dependencies
const deps = buildDependencies();

app.use(cors());

app.use("/books", booksRoutes(deps));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
