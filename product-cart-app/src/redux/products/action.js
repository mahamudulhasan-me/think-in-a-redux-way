import {
  ADD_DELETED_QUANTITY,
  ADD_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "./actionType";

export const addProduct = (productInfo) => {
  return {
    type: ADD_PRODUCT,
    payload: productInfo,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
};
export const increaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
};

export const addDeletedQuantity = (id, quantity) => {
  return {
    type: ADD_DELETED_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};
