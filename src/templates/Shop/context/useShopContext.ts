import { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const useShopContext = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};
