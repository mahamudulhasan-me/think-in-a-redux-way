import { BOOKING, DELETEBOOKINGINFO } from "./action";

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
