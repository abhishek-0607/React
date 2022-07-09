import { createStore } from "redux";

const incCountAction = { type: "INC_COUNT", payload: 1 };
const decCountAction = { type: "DEC_COUNT", payload: 1 };

// class Store {
//   constructor(reducer, init) {
//     this.reducer = reducer;
//     this.state = init;
//   }
//   getState() {
//     return this.state;
//   }
//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INC_COUNT":
      return { ...state, count: state.count + payload };
    case "DEC_COUNT":
      return { ...state, count: state.count - payload };
    case "ADD_TODO":
      return { ...state, todo: [...state.todo, payload] };

    default:
      return state;
  }
};

const init = { count: 0, todo: [] };

const store = createStore(reducer, init);

console.log(store.getState());

store.dispatch(incCountAction);
store.dispatch(incCountAction);
console.log(store.getState());

store.dispatch(decCountAction);
store.dispatch({
  type: "ADD_TODO",
  payload: { title: "Learn Redux", status: false },
});

console.log(store.getState());
