import { createFileRoute } from "@tanstack/react-router";
import { DiscoverPage } from "../components/discover/Discover";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <DiscoverPage />;
}
