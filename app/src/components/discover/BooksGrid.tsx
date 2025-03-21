import React, { useEffect, useRef } from "react";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { Book } from "@/types";
import { Link } from "@tanstack/react-router";
import { useVirtualizer, VirtualItem } from "@tanstack/react-virtual";
import BookCard from "../ui/BookCard";

type BooksGridProps = {
  books: Book[];
  fetchNextPage: () => void;
};

const BooksGrid: React.FC<BooksGridProps> = ({
  books,
  fetchNextPage,
}: BooksGridProps) => {
  const width = useWindowWidth();

  const gridRef = useRef<HTMLDivElement>(null);
  const observerTarget = useRef(null);

  const CARD_HEIGHT = 320; // BookCard Height
  const CARD_WIDTH = 208; // BookCard Width

  const itemsPerRow = Math.max(1, Math.floor(width / CARD_WIDTH));
  const rowCount = Math.ceil(books.length / itemsPerRow);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => gridRef.current,
    estimateSize: () => CARD_HEIGHT,
    overscan: 5,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) fetchNextPage();
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      observer.disconnect();
    };
  });

  const renderRowItems = (virtualRow: VirtualItem) => {
    const index = virtualRow.index;

    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, books.length);

    for (let i = fromIndex; i < toIndex; i++) {
      const book = books[i];

      if (book) {
        items.push(
          <Link
            key={book.id + i}
            to="/books/$bookID"
            params={{ bookID: book.id }}
          >
            <BookCard book={book} />
          </Link>
        );
      }
    }

    return (
      <div
        className={`flex flex-row justify-center items-center gap-8`}
        key={virtualRow.index}
        ref={index === rowCount - 1 ? observerTarget : null}
        style={{
          transform: `translateY(${
            index === 0 ? virtualRow.start : virtualRow.start + 32 * index
          }px)`,
          position: "absolute",
          top: 0,
          left: 0,
          height: `${CARD_HEIGHT}px`,
        }}
      >
        {items}
      </div>
    );
  };

  return (
    <div ref={gridRef} className="w-full p-6 h-[800px] overflow-auto">
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
        className={`w-full relative flex flex-col gap-8 mb-24 items-center`}
      >
        {rowVirtualizer
          .getVirtualItems()
          .map((virtualRow) => renderRowItems(virtualRow))}
      </div>
    </div>
  );
};

export default BooksGrid;
