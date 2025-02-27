import { getData } from "@/api/api";
import { Book, FilterValues } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetBooks = (filterValues: FilterValues) =>
  useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: async () => {
      try {
        const url = `/books?sortBy=${filterValues.sortBy}&genre=${filterValues.genre}`;
        const data = await getData(url);

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
