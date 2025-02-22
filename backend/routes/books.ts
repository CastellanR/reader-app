import express, { Request, Response } from "express";
import { getBooks, GetBooksCommand } from "../application/get_books";
import { Dependencies } from "../dependencies";

const router = express.Router();

const booksRoutes = (deps: Dependencies) => {
  router.get("/", async (req: Request, res: Response) => {
    const cmd: GetBooksCommand = req.body;
    try {
      const books = await getBooks(cmd, deps);

      res.json(books);
    } catch (error) {
      res.status(500).send("Something went wrong!");
    }
  });

  return router;
};

export default booksRoutes;
