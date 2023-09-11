import { BOOKING } from "./action";

const initialState = [
  {
    destinationFrom: "",
    destinationTo: "",
    journeyDate: "",
    guests: "",
    classType: "",
  },
];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
        const bookedInfo = state.map(info=>  ...info,
            destinationFrom: action.payload.destinationFrom,
            destinationTo: action.payload.destinationTo,
            journeyDate: action.payload.journeyDate,
            guests: action.payload.guests,
            classType: action.payload.classType,)
      
    default:
      return state;
  }
};

export default bookingReducer;
