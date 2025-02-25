import { useGetBestSellerBooks } from "@/services/books";
import BookCard from "@/ui/BookCard";

const BooksGrid: React.FC = () => {
  const { data, isLoading, error } = useGetBestSellerBooks();

  if (error) {
    console.error("Something happened", error);
  }

  return (
    <div className="flex flex-row gap-8 items-center justify-center flex-wrap flex-grow mb-28">
      {!isLoading &&
        data?.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default BooksGrid;
