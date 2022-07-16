import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as TodosReducer } from "../features/Todos/reducer";
import { reducer as CounterReducer } from "../features/Counter/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counterState: CounterReducer,
  todosState: TodosReducer,
});
// const logger2 = (store) => (next) => (action) => {
//   console.time("logger2");
//   next(action);
//   console.timeEnd("logger2");
// };
// const logger1 = (store) => (next) => (action) => {
//   // console.time("logger1");
//   // next(action);
//   // console.timeEnd("logger1");
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

export const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log("entire store", store.getState());
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
