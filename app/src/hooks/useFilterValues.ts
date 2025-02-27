import { FilterValuesContext } from "@/contexts/FilterValuesContext";
import { useContext } from "react";

export function useFilterValues() {
  const context = useContext(FilterValuesContext);
  if (!context) {
    throw new Error("useFilterValues must be used within a ThemeProvider");
  }
  return context;
}
