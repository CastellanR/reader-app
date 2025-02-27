import { FilterValues } from "@/types";
import { genreValues, sortValues } from "@/utils/constants";
import { ReactNode, useState } from "react";
import { FilterValuesContext } from "./FilterValuesContext";

const defaultFilterValues: FilterValues = {
  genre: genreValues[1].key,
  sortBy: sortValues[0].key,
};

export function FilterValuesProvider({ children }: { children: ReactNode }) {
  const [filterValues, setFilterValues] = useState(defaultFilterValues);

  return (
    <FilterValuesContext.Provider value={{ filterValues, setFilterValues }}>
      {children}
    </FilterValuesContext.Provider>
  );
}
