import { SELECTED_PRODUCTS, SET_PRODUCTS } from "./actionTypes";

export const setProducts = (products) => {
  return { type: SET_PRODUCTS, payload: products };
};

export const selectedProducts = (products) => {
  return { type: SELECTED_PRODUCTS, payload: products };
};
