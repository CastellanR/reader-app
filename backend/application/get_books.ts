import { Dependencies } from "../dependencies";
import { Book } from "../domain/book";
import { getData } from "../libs/http";

export type GetBooksCommand = {
  sortBy: string;
  genre: string;
};

export const getBooks = async (
  cmd: GetBooksCommand,
  deps: Dependencies
): Promise<Book[]> => {
  try {
    const books = await getData(
      `/volumes?q=${cmd.genre}&maxResults=40&orderBy=${cmd.sortBy}`
    );

    return books;
  } catch (error) {
    deps.logger.info("Error trying to get books", error);
  }
};
