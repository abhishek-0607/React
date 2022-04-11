import { createContext } from "react";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value={134}>{children}</CartContext.Provider>;
};
