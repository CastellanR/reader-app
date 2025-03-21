import { useFilterValues } from "@/hooks/useFilterValues";
import { useGetBooks } from "@/services/books";
import { Book } from "@/types";
import { genreValues, sortValues } from "@/utils/constants";
import { Select, SelectItem } from "@heroui/select";
import { CaretDown } from "@phosphor-icons/react";
import { useRef } from "react";
import BooksGrid from "./BooksGrid";

export const DiscoverPage: React.FC = () => {
  const { filterValues, setFilterValues } = useFilterValues();

  const hasFetched = useRef(false);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetBooks(filterValues);

  if (error) {
    console.error("Something happened", error);
  }

  const books: Book[] = data?.pages?.flatMap((page) => page) ?? [];

  const handleGenreSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterValues({ ...filterValues, genre: event.target.value });
  };

  const handleSortBySelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterValues({ ...filterValues, sortBy: event.target.value });
  };

  const handleFetchNextPage = () => {
    if (hasFetched.current) return;

    if (hasNextPage && !isFetchingNextPage) {
      hasFetched.current = true;

      fetchNextPage().then(() => {
        hasFetched.current = false;
      });
    }
  };

  return (
    <div className="flex flex-col gap-7 no-scrollbar p-0">
      <div className="flex flex-row justify-start items-center gap-16 p-6 py-0">
        <Select
          className="max-w-sm p-0"
          variant="bordered"
          defaultSelectedKeys={[filterValues.genre]}
          label=""
          scrollShadowProps={{
            isEnabled: false,
          }}
          selectorIcon={<CaretDown size={16} weight="fill" />}
          classNames={{
            listboxWrapper: "no-scrollbar opacity-100",
          }}
          onChange={handleGenreSelectChange}
          aria-label="Select genre"
        >
          {genreValues.map((sortValue) => (
            <SelectItem key={sortValue.key}>{sortValue.label}</SelectItem>
          ))}
        </Select>
        <Select
          className="max-w-sm p-0"
          variant="bordered"
          defaultSelectedKeys={[filterValues.sortBy]}
          label=""
          scrollShadowProps={{
            isEnabled: false,
          }}
          selectorIcon={<CaretDown size={16} weight="fill" />}
          classNames={{
            listboxWrapper: "no-scrollbar opacity-100",
          }}
          onChange={handleSortBySelectChange}
          aria-label="Select sort preference"
        >
          {sortValues.map((sortValue) => (
            <SelectItem key={sortValue.key}>{sortValue.label}</SelectItem>
          ))}
        </Select>
      </div>
      {!isLoading && (
        <BooksGrid books={books} fetchNextPage={handleFetchNextPage} />
      )}
    </div>
  );
};
