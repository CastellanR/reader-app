import { getData } from "@/api/api";
import { Book } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetBestSellerBooks = () =>
  useQuery<Book[]>({
    queryKey: ["bestseller"],
    queryFn: async () => {
      try {
        const data = await getData("/books");

        // Filter books that have a cover image
        const booksWithCovers = data.items.filter(
          (book: Book) => book.volumeInfo.imageLinks?.thumbnail
        );

        return booksWithCovers;
      } catch (error) {
        console.error(error);
      }
    },
  });
