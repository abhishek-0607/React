import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "./actionTypes";

const initState = {
  list: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, list: [...state.list, payload] };
    case DELETE_TODO:
      const newList = state.list.filter((elem) => elem.id !== payload);
      return { ...state, list: newList };
    case REMOVE_TODO:
      return { ...state, list: [] };
    default:
      return state;
  }
};
