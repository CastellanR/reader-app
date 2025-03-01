import { useGetBookByID } from "@/services/books";
import { useParams } from "@tanstack/react-router";
import { FC } from "react";

export const BookDetailsPage: FC = () => {
  const { bookID } = useParams({ strict: false });

  const { data, isLoading, error } = useGetBookByID(bookID!);

  if (error) {
    console.error("Something happened", error);
  }

  if (!data || Object.keys(data).length === 0) {
    return <p>Book not found!</p>;
  }

  return <div>{!isLoading && data?.volumeInfo.title}</div>;
};
