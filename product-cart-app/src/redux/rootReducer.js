import { combineReducers } from "redux";
import cartReducer from "./cart/reducer.js";
import productReducer from "./products/reducer.js";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
