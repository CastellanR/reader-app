import { getData } from "@/api/api";
import { Book, GetBooksDTO } from "@/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetBooks = ({ sortBy, genre }: GetBooksDTO) =>
  useInfiniteQuery<Book[]>({
    queryKey: ["books", sortBy, genre],
    queryFn: async ({ pageParam = 0 }) => {
      try {
        const url = `/books?sortBy=${sortBy}&genre=${genre}&startIndex=${pageParam}`;
        const data = await getData(url);

        return data;
      } catch (error) {
        console.error(error);
      }
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length : undefined,
    refetchOnWindowFocus: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    placeholderData: (previousData, _previousQuery) => previousData,
    initialPageParam: 0,
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
