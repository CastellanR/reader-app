import { BookDetailsPage } from "@/components/books/BookDetailsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$bookID")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BookDetailsPage />;
}
