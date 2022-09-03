import { SET_PRODUCTS } from "./actionTypes";

const initState = { products: [] };
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS: {
      return { ...state, products: [...state.products, payload] };
    }
    default:
      return state;
  }
};
