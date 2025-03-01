import { Dependencies } from "../dependencies";
import { Book } from "../domain/book";
import { getData } from "../libs/http";

export type SearchBooksCommand = {
  searchTerm;
};

export type SearchBooksResponse = {
  titleISBNResults: Book[];
  authorResults: Book[];
};

export const searchBooks = async (
  cmd: SearchBooksCommand,
  deps: Dependencies
): Promise<SearchBooksResponse> => {
  try {
    const values = await Promise.all([
      getData(`/volumes?q=${cmd.searchTerm}&maxResults=10`), // Book title & ISBN
      getData(`/volumes?q=inauthor:${cmd.searchTerm}&maxResults=10`), // Author search
    ]);

    const response = {
      titleISBNResults:
        values[0].totalItems === 0
          ? []
          : values[0].items.filter(
              (book: Book) => book.volumeInfo.imageLinks?.thumbnail
            ),
      authorResults:
        values[1].totalItems === 0
          ? []
          : values[1].items.filter(
              (book: Book) => book.volumeInfo.imageLinks?.thumbnail
            ),
    };

    return response;
  } catch (error) {
    deps.logger.info("Error trying to get books", error);
  }
};
