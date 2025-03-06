import { getData } from "@/api/api";
import { Book, FilterValues, GetBooksResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetBooks = ({ sortBy, genre }: FilterValues) =>
  useQuery<GetBooksResponse>({
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
    gcTime: 60 * 5 * 1000,
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
