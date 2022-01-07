import { createContext } from "react";
const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  return <CartContext.Provider value={1}>{children}</CartContext.Provider>;
};
