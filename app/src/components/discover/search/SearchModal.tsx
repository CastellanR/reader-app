import { useSearchBooks } from "@/services/search";
import { Input } from "@heroui/input";
import { ModalBody } from "@heroui/modal";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import { SearchResults } from "./SearchResults";

export const SearchModal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { data, isLoading, error } = useSearchBooks(deferredSearchTerm);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (error) {
    console.error("Something happened", error);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value);

  return (
    <ModalBody>
      <div className="p-8 h-screen flex flex-col gap-8">
        <Input
          size="md"
          variant={"bordered"}
          radius={"full"}
          endContent={<MagnifyingGlass size={20} />}
          label=""
          placeholder="What are you looking for?"
          type="text"
          classNames={{ mainWrapper: "max-w-2xl" }}
          onChange={handleInputChange}
          ref={inputRef}
        />
        {!isLoading && data && <SearchResults searchResults={data} />}
      </div>
    </ModalBody>
  );
};
