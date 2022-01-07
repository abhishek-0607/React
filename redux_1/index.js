//const action = { type: "INC_COUNT", payload: 1 };
const { createStore } = require("redux");

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
      return { ...state, count: state.count + payload };
    case "ADD_TODO":
      return { ...state, count: state.count + payload };
    default:
      return state;
  }
  //   if (action.type === "INC_COUNT") {

  //   }
  //   return state;
};
const init = { count: 0, todo: [] };

const store = createStore(reducer, init);

console.log(store.getState());

store.dispatch({ type: "INC_COUNT", payload: 1 });

console.log(store.getState());
