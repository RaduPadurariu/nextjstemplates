import { createContext } from "react";
import { ShopContextType } from "../types/shopTypes";

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);
