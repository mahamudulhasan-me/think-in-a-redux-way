import {
  ADD_DELETED_QUANTITY,
  ADD_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "./actionType";

const initialState = [];

const findMaxId = (arr) => {
  const maxId = arr.reduce((maxId, item) => Math.max(item?.id, maxId), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: findMaxId(state),
          ...action.payload,
        },
      ];
    case DECREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    case INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    case ADD_DELETED_QUANTITY:
      const { id, quantity } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default reducer;
