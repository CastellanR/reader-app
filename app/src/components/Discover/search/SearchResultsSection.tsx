import { Book } from "@/types";
import { BookSearchDetails } from "@/ui/BookSearchDetails";
import { FC } from "react";

type SearchResultsSectionProps = {
  listBook?: Book[];
  heading: string;
};

export const SearchResultsSection: FC<SearchResultsSectionProps> = ({
  listBook,
  heading,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold">{heading}</h2>
      <div className="flex flex-row flex-wrap gap-8 py-8">
        {listBook?.map((book: Book) => (
          <BookSearchDetails book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};
