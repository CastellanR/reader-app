import { getData } from "@/api/api";
import { SearchResults } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useSearchBooks = (searchTerm: string) =>
  useQuery<SearchResults>({
    queryKey: ["searchResults", searchTerm],
    queryFn: async () => {
      try {
        const url = `/search?searchTerm=${searchTerm}`;
        const data = await getData(url);

        return data;
      } catch (error) {
        console.error(error);
      }
    },
    enabled: !!searchTerm,
  });
