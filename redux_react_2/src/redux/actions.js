import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "./actionTypes";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const removeTodo = () => {
  return { type: REMOVE_TODO };
};
export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};
