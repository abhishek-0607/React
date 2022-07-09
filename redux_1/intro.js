const action = { type: "", payload: "" };

class Store {
  constructor(reducer, state) {
    this.reducer = reducer;
    this.state = init;
  }
  getState() {
    return this.state;
  }
}
const reducer = (store, action) => {
  return store;
};
const init = { count: 0 };

const store = new Store(reducer, init);
console.log(store.getState());
