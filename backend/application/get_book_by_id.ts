import { Dependencies } from "../dependencies";
import { Book } from "../domain/book";
import { getData } from "../libs/http";

export type GetBookByIDCommand = {
  bookID: string;
};

export const getBookByID = async (
  cmd: GetBookByIDCommand,
  deps: Dependencies
): Promise<Book[]> => {
  try {
    const book = await getData(`/volumes/${cmd.bookID}?`);

    return book;
  } catch (error) {
    deps.logger.info("Error trying to get book by ID", error);
  }
};
