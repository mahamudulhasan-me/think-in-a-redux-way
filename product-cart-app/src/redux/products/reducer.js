import { ADD_PRODUCT } from "./actionType";

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
    default:
      return state;
  }
};

export default reducer;
