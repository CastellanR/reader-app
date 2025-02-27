import { FilterValues } from "@/types";
import { createContext } from "react";

type FilterValuesContextType = {
  filterValues: FilterValues;
  setFilterValues: (filterValues: FilterValues) => void;
};

export const FilterValuesContext = createContext<
  FilterValuesContextType | undefined
>(undefined);
