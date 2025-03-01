import { getData } from "@/api/api";
import { Book, FilterValues } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetBooks = ({ sortBy, genre }: FilterValues) =>
  useQuery<Book[]>({
    queryKey: ["books", sortBy, genre],
    queryFn: async () => {
      try {
        const url = `/books?sortBy=${sortBy}&genre=${genre}`;
        const data = await getData(url);

        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

export const useGetBookByID = (bookID: string) =>
  useQuery<Book>({
    queryKey: ["book"],
    queryFn: async () => {
      try {
        const url = `/books/${bookID}`;
        const data = await getData(url);

        if (!data) {
          return {};
        }

        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
