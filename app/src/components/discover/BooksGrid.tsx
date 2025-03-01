import { Book } from "@/types";
import BookCard from "@/ui/BookCard";
import { Link } from "@tanstack/react-router";

type BooksGridProps = {
  books?: Book[];
};

const BooksGrid: React.FC<BooksGridProps> = ({ books }: BooksGridProps) => (
  <div className="flex flex-row gap-8 items-center justify-center flex-wrap flex-grow mb-28 p-6">
    {books?.map((book) => (
      <Link key={book.id} to="/books/$bookID" params={{ bookID: book.id }}>
        <BookCard book={book} />
      </Link>
    ))}
  </div>
);

export default BooksGrid;
