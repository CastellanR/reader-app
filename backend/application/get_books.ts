import { Dependencies } from "../dependencies";
import { Book } from "../domain/book";
import { getData } from "../libs/http";

export type GetBooksCommand = {
  sortBy: string;
  genre: string;
};

export type GetBooksResponse = {
  totalItems: number;
  books: Book[];
};

export const getBooks = async (
  cmd: GetBooksCommand,
  deps: Dependencies
): Promise<GetBooksResponse> => {
  try {
    const books = await getData(
      `/volumes?q=${cmd.genre}&maxResults=40&orderBy=${cmd.sortBy}`
    );

    // Filter books that have a cover image
    const booksWithCovers = books.items.filter(
      (book: Book) => book.volumeInfo.imageLinks?.thumbnail
    );

    return {
      totalItems: books.totalItems,
      books: booksWithCovers,
    };
  } catch (error) {
    deps.logger.info("Error trying to get books", error);
  }
};
