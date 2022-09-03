import { combineReducers, createStore } from "redux";
import { reducer as ProductReducer } from "./features/Product/reducer";
const rootReducer = combineReducers({
  productState: ProductReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
