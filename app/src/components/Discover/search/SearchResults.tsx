import { SearchResults as SearchResultsType } from "@/types";
import { Divider } from "@heroui/divider";
import { SearchResultsSection } from "./SearchResultsSection";

type SearchResultsProps = {
  searchResults?: SearchResultsType;
};
export const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
}) => {
  return (
    <div className="flex flex-col gap-8 h-full pb-16">
      <div>
        <h1 className="font-extrabold text-2xl">
          {searchResults?.authorResults.length !== 0 ||
          searchResults?.titleISBNResults.length !== 0
            ? "Search results"
            : "Sorry, there are no search results."}
        </h1>
      </div>
      <div className="flex flex-col gap-16 h-full overflow-y-scroll no-scrollbar">
        {searchResults?.titleISBNResults.length !== 0 && (
          <SearchResultsSection
            listBook={searchResults?.titleISBNResults}
            heading="By title or ISBN"
          />
        )}
        {searchResults?.authorResults.length !== 0 &&
          searchResults?.titleISBNResults.length !== 0 && (
            <Divider className="h-0.5 bg-gray-300" />
          )}
        {searchResults?.authorResults.length !== 0 && (
          <SearchResultsSection
            listBook={searchResults?.authorResults}
            heading="By author"
          />
        )}
      </div>
    </div>
  );
};
