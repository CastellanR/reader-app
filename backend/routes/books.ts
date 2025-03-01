import express, { Request, Response } from "express";
import { getBookByID, GetBookByIDCommand } from "../application/get_book_by_id";
import { getBooks, GetBooksCommand } from "../application/get_books";
import { Dependencies } from "../dependencies";

const router = express.Router();

const booksRoutes = (deps: Dependencies) => {
  router.get("/:bookID", async (req: Request, res: Response) => {
    const cmd: GetBookByIDCommand = req.params;
    try {
      const book = await getBookByID(cmd, deps);

      if (!book) {
        res.status(404).send("Not found!");
      }

      res.json(book);
    } catch (error) {
      res.status(500).send("Something went wrong!");
    }
  });

  router.get("/", async (req: Request, res: Response) => {
    const cmd: GetBooksCommand = req.query;
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
