import express from "express";
import { PORT } from "./config";
import booksRoutes from "./routes/books";

const app = express();

app.use("/books", booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
