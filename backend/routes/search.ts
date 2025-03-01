import express, { Request, Response } from "express";
import { searchBooks, SearchBooksCommand } from "../application/search_books";
import { Dependencies } from "../dependencies";

const router = express.Router();

const searchRoutes = (deps: Dependencies) => {
  router.get("/", async (req: Request, res: Response) => {
    const cmd: SearchBooksCommand = req.query;
    try {
      const searchResults = await searchBooks(cmd, deps);

      res.json(searchResults);
    } catch (error) {
      res.status(500).send("Something went wrong!");
    }
  });

  return router;
};

export default searchRoutes;
