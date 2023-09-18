import { combineReducers } from "redux";
import productReducer from "./products/reducer.js";

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
