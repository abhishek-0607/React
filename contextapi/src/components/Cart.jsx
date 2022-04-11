import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
  const value = useContext(CartContext);
  return <div>No. of items {value}</div>;
};
