import { DDECREMENT, DINCREMENT } from "./action";

export const increment = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
