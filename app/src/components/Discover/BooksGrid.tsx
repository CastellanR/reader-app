import { Book } from "@/types";
import BookCard from "@/ui/BookCard";

type BooksGridProps = {
  books?: Book[];
};

const BooksGrid: React.FC<BooksGridProps> = ({ books }: BooksGridProps) => (
  <div className="flex flex-row gap-8 items-center justify-center flex-wrap flex-grow mb-28 p-6">
    {books?.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
);

export default BooksGrid;
