import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./actionTypes.js";

export const incCount = (data) => {
  return { type: INC_COUNT, payload: data };
};
export const decCount = (data) => {
  return { type: DEC_COUNT, payload: data };
};
export const addTodo = (data) => {
  return { type: ADD_TODO, payload: { ...data } };
};
