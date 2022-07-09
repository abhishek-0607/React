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

// count reducer
// const initState = { count: 0, todos: [] };
const initState = { loading: false, todos: [], error: false };

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    // case INC_COUNT:
    //   return { ...state, count: state.count + payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case ADD_TODO_LOADING:
      return { ...state, loading: true };
    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, payload], loading: false };
    case ADD_TODO_ERROR:
      return { ...state, loading: false, error: true };
    case GET_TODO_LOADING:
      return { ...state, loading: true };
    case GET_TODO_SUCCESS:
      return { ...state, todos: payload, loading: false };
    case GET_TODO_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
