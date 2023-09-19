import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from "./actionType";

const initialState = [];

const isExist = (state, payload) => {
  return state.some((item) => item.id === payload.id);
};

const reducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      if (isExist(state, payload)) {
        if (payload.quantity <= 0) {
          return state;
        }
        return copiedState.map((item) =>
          item.id === payload.id
            ? {
                ...item,

                quantity: item.quantity + 1,
                totalAmount: item.price * (item.quantity + 1),
              }
            : item
        );
      } else {
        copiedState.push({
          ...payload,
        });
        return copiedState;
      }
    case INCREMENT_QUANTITY:
      return copiedState.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalAmount: item.price * (item.quantity + 1),
          };
        }
        return item;
      });
    case DECREMENT_QUANTITY:
      return copiedState.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalAmount: item.price * (item.quantity + 1),
          };
        }
        return item;
      });

    case REMOVE_FROM_CART:
      return copiedState.filter((item) => item.id !== payload);

    default:
      return state;
  }
};

export default reducer;
