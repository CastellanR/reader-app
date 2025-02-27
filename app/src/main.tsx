import { HeroUIProvider } from "@heroui/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FilterValuesProvider } from "./contexts/FilterValuesProvider";
import { routeTree } from "./routeTree.gen";
import "./styles/index.css";

const router = createRouter({ routeTree });

const queryClient = new QueryClient();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HeroUIProvider>
      <StrictMode>
        <FilterValuesProvider>
          <RouterProvider router={router} />
        </FilterValuesProvider>
      </StrictMode>
    </HeroUIProvider>
  </QueryClientProvider>
);
