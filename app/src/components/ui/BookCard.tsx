import { Book } from "@/types";

type BookCardProps = {
  book: Book;
};

const BookCard: React.FC<BookCardProps> = ({ book }: BookCardProps) => {
  return (
    <article className="flex flex-col gap-2">
      <img
        className="w-52 h-80"
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
    </article>
  );
};

export default BookCard;
