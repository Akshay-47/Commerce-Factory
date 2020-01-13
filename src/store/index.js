import { combineReducers, createStore } from "redux";

import productsReducer from "./products";
import cartReducer from "./cart";
import filterReducer from "./filterBy";

const rootReducer = combineReducers({
  productData: productsReducer,
  cartData: cartReducer,
  filterBy: filterReducer
});

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

if (process.env.NODE_ENV === "development") {
  window.store = store;
}

export default store;
