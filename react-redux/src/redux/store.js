import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import myLogger from "./middleware/myLogger";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;
