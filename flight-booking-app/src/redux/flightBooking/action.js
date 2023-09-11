import { BOOKING, DELETEBOOKINGINFO } from "./actionTypes";

export const booking = (payload) => {
  return {
    type: BOOKING,
    payload,
  };
};

export const deleteBookingInfo = (id) => {
  return {
    type: DELETEBOOKINGINFO,
    id,
  };
};
