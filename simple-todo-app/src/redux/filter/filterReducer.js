import { COLORCHANGED, STATUSCHANGED } from "./action";
import filterInitialState from "./filterInitialState";

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED: {
      const { color, changType } = action.payload;

      switch (changType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }
    }

    default:
      return state;
  }
};

export default filterReducer;