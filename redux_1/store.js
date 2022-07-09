import { createStore } from "redux";
import { incCount } from "./actions.js";
import { reducer } from "./reducer.js";

const init = { count: 0, todo: [] };

const store = createStore(reducer, init);
store.dispatch(incCount(1));
