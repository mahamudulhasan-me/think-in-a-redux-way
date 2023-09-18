import { ADD_PRODUCT } from "./actionType";

export const addProduct = (productInfo) => {
  return {
    type: ADD_PRODUCT,
    payload: productInfo,
  };
};
