import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer as TodoReducer } from "./redux/reducer";
const rootReducer = combineReducers({
  todoState: TodoReducer,
});

export const store = createStore(
  rootReducer,
  //   applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
console.log(store.getState());
