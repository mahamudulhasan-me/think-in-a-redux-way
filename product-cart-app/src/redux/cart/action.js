import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from "./actionType";

export const addToCart = (productInfo) => {
  return {
    type: ADD_TO_CART,
    payload: productInfo,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const incrementQuantity = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: id,
  };
};

export const decrementQuantity = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: id,
  };
};
