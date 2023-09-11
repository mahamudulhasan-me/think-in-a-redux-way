import { BOOKING, DELETEBOOKINGINFO } from "./action";

const initialState = { booking: [] };
const idGenerator = (arr) => {
  const maxId = arr.reduce((maxId, booking) => Math.max(maxId, booking.id), -1);
  return maxId + 1;
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

    case DELETEBOOKINGINFO:
      // eslint-disable-next-line no-case-declarations
      const deletedInfo = state?.booking?.filter(
        (info) => info.id !== action.id
      );
      return {
        ...state,
        booking: deletedInfo,
      };
    default:
      return state;
  }
};

export default bookingReducer;
