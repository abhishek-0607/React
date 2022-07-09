import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  INC_COUNT,
  REMOVE_TODO,
} from "./actionTypes";

export const incCount = (data) => {
  return { type: INC_COUNT, payload: data };
};

export const addTodo = (data) => {
  return { type: ADD_TODO, payload: data };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id };
};

export const addTodoLoading = () => {
  return { type: ADD_TODO_LOADING };
};
export const addTodoSuccess = (res) => {
  return { type: ADD_TODO_SUCCESS, payload: res };
};
export const addTodoError = (err) => {
  return { type: ADD_TODO_ERROR, payload: err };
};
// getTodo Actions
export const getTodoSuccess = (data) => {
  return { type: GET_TODO_SUCCESS, payload: data };
};

export const getTodoLoading = (err) => {
  return { type: GET_TODO_LOADING, payload: err };
};

export const getTodoError = (err) => {
  return { type: GET_TODO_ERROR, payload: err };
};
