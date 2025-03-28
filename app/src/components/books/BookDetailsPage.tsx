import { useGetBookByID } from "@/services/books";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Plus } from "@phosphor-icons/react";
import { useParams } from "@tanstack/react-router";
import DOMPurify from "dompurify";
import { FC } from "react";
import { Ratings } from "./Ratings";

export const BookDetailsPage: FC = () => {
  const { bookID } = useParams({ strict: false });

  const { data, isLoading, error } = useGetBookByID(bookID!);

  if (error) {
    console.error("Something happened", error);
  }

  if (!data || Object.keys(data).length === 0) {
    return <p>Book not found!</p>;
  }

  const sanitizeAndRemoveHtml = (dirtyHtml: string) => {
    const sanitizedHtml = DOMPurify.sanitize(dirtyHtml);

    const tempElement = document.createElement("div");
    tempElement.innerHTML = sanitizedHtml;
    return tempElement.textContent || tempElement.innerText || "";
  };

  return (
    !isLoading && (
      <div className="flex flex-col items-center w-screen gap-8 pb-14">
        <div className="flex flex-row justify-center items-center bg-gray-200 p-8 w-screen">
          <img
            className="w-64 h-96"
            src={data.volumeInfo.imageLinks.thumbnail}
            alt={data.volumeInfo.title}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <div>
            <p className="font-extrabold text-2xl">{data.volumeInfo.title}</p>
          </div>
          <div>
            <p>{data.volumeInfo.authors}</p>
          </div>
        </div>
        <Divider className="h-0.5 bg-gray-300" />
        <Ratings
          ratingsCount={data.volumeInfo.ratingsCount}
          averageRating={data.volumeInfo.averageRating}
        />
        <Divider className="h-0.5 bg-gray-300" />
        <div>
          <Button color="primary" variant="solid">
            <Plus size={16} /> Add to my library
          </Button>
        </div>
        <div className="w-4/5 flex flex-row justify-center items-center">
          <p>{sanitizeAndRemoveHtml(data.volumeInfo.description)}</p>
        </div>
      </div>
    )
  );
};
