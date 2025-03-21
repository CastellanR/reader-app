import { Dependencies } from "../dependencies";
import { Book } from "../domain/book";
import { getData } from "../libs/http";

export type GetBooksCommand = {
  sortBy: string;
  genre: string;
  startIndex: number;
};

export const getBooks = async (
  cmd: GetBooksCommand,
  deps: Dependencies
): Promise<Book[]> => {
  try {
    const books = await getData(
      `/volumes?q=${cmd.genre}&maxResults=24&orderBy=${cmd.sortBy}&startIndex=${
        cmd.startIndex * 24
      }`
    );

    // Filter books that have a cover image
    const booksWithCovers = books.items.filter(
      (book: Book) => book.volumeInfo.imageLinks?.thumbnail
    );

    return booksWithCovers;
  } catch (error) {
    deps.logger.info("Error trying to get books", error);
  }
};
