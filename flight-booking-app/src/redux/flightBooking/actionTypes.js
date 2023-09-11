import { BOOKING } from "./action";

export const booking = (payload) => {
  return {
    type: BOOKING,
    payload,
  };
};
