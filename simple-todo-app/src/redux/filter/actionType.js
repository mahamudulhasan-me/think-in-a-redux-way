import { COLORCHANGED, STATUSCHANGED } from "./action";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: { status },
  };
};

export const colorChanged = (color, changType) => {
  return {
    type: COLORCHANGED,
    payload: { color, changType },
  };
};
