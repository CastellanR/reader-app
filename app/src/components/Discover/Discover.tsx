import { useFilterValues } from "@/hooks/useFilterValues";
import { useGetBooks } from "@/services/books";
import { genreValues, sortValues } from "@/utils/constants";
import { Input } from "@heroui/input";
import { Modal, ModalContent, useDisclosure } from "@heroui/modal";
import { Select, SelectItem } from "@heroui/select";
import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import BooksGrid from "./BooksGrid";
import { SearchModal } from "./search/SearchModal";

export const DiscoverPage: React.FC = () => {
  const { filterValues, setFilterValues } = useFilterValues();

  const { data, isLoading, error } = useGetBooks(filterValues);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (error) {
    console.error("Something happened", error);
  }

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

  const handleClickOnInput = () => {
    onOpen();
  };

  return (
    <div className="flex flex-col gap-7 h-full overflow-y-scroll no-scrollbar p-0">
      <header className="flex flex-col p-6 pb-0 gap-4">
        <div className="flex flex-row justify-between items-center gap-12">
          <h1 className="font-bold">Reader App</h1>
          <div className="flex flex-grow">
            <Input
              size="md"
              variant={"bordered"}
              radius={"full"}
              endContent={<MagnifyingGlass size={20} />}
              label=""
              placeholder="Search your book"
              type="text"
              classNames={{ mainWrapper: "max-w-2xl" }}
              onClick={handleClickOnInput}
            />
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
            <ModalContent>{() => <SearchModal />}</ModalContent>
          </Modal>
        </div>
        <div className="flex flex-row justify-start items-center gap-16">
          <Select
            className="max-w-3xs p-0"
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
            className="max-w-3xs p-0"
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
      </header>
      {!isLoading && <BooksGrid books={data} />}
    </div>
  );
};
