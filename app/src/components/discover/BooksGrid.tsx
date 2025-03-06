import { useWindowWidth } from "@/hooks/useWindowWidth";
import { GetBooksResponse } from "@/types";
import { Link } from "@tanstack/react-router";
import { useVirtualizer, VirtualItem } from "@tanstack/react-virtual";
import { useRef } from "react";
import BookCard from "../ui/BookCard";

type BooksGridProps = {
  booksData?: GetBooksResponse;
};

const BooksGrid: React.FC<BooksGridProps> = ({ booksData }: BooksGridProps) => {
  const width = useWindowWidth();

  const gridRef = useRef<HTMLDivElement>(null);

  const ITEMS_COUNT = booksData?.books.length || 0;
  const ITEM_SIZE = 320; // BookCard Height

  const itemsPerRow = Math.max(1, Math.floor(width / ITEM_SIZE));
  const count = Math.ceil(ITEMS_COUNT / itemsPerRow);

  const virtualizer = useVirtualizer({
    count: count,
    estimateSize: () => ITEM_SIZE,
    overscan: 3,
    getScrollElement: () => gridRef.current,
  });

  const renderRowItems = (virtualRow: VirtualItem) => {
    const index = virtualRow.index;

    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

    if (booksData) {
      for (let i = fromIndex; i < toIndex; i++) {
        const book = booksData.books[i];

        if (book) {
          items.push(
            <Link
              // ref={index === booksData.books!.length - 1 ? lastItemRef : null}
              key={book.id}
              to="/books/$bookID"
              params={{ bookID: book.id }}
            >
              <BookCard book={book} />
            </Link>
          );
        }
      }
    }

    return (
      <div
        className="flex flex-row justify-center items-center gap-8"
        key={virtualRow.key}
      >
        {items}
      </div>
    );
  };

  return (
    <div ref={gridRef} className="w-full p-6 pb-24 flex-grow overflow-y-hidden">
      <div
        className={`w-full relative flex flex-col gap-8`}
        style={{
          height: virtualizer.getTotalSize() + 80, // Footer height
        }}
      >
        {virtualizer
          .getVirtualItems()
          .map((virtualRow) => renderRowItems(virtualRow))}
      </div>
    </div>
  );
};

export default BooksGrid;
