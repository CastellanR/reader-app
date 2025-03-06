import { Book } from "@/types";

type BookSearchDetailsProps = {
  book: Book;
};

export const BookSearchDetails: React.FC<BookSearchDetailsProps> = ({
  book,
}) => {
  return (
    <div className="flex flex-row gap-4 w-96 h-max-28 overflow-hidden">
      <img
        className="w-20 h-28"
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <div className="flex flex-col gap-4">
        <p className="text-ellipsis max-h-[4.5rem] overflow-hidden">
          {book.volumeInfo.title}
        </p>
        <p className="text-ellipsis max-h-[4.5rem]">
          {book.volumeInfo.authors}
        </p>
      </div>
    </div>
  );
};
