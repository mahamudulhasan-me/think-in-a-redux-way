import { BOOKING, DELETEBOOKINGINFO } from "./actionTypes";

const idGenerator = (arr) => {
  const maxId = arr.reduce((maxId, booking) => Math.max(maxId, booking.id), -1);
  return maxId + 1;
};

const initialState = {
  booking: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      if (state.booking) {
        return {
          ...state,
          booking: [
            ...state.booking,
            { ...action.payload, id: idGenerator(state.booking) },
          ],
        };
      }
      break;
    case DELETEBOOKINGINFO: {
      const afterDeleteBooking = state.booking.filter(
        (info) => info.id !== action.id
      );
      return {
        ...state,
        booking: afterDeleteBooking,
      };
    }
    default:
      return state;
  }
};

export default bookingReducer;
