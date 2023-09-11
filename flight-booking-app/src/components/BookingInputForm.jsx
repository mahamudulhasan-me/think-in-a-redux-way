import { useDispatch, useSelector } from "react-redux";
import frame from "../assets/img/icons/Frame.svg";
import vector1 from "../assets/img/icons/Vector (1).svg";
import vector3 from "../assets/img/icons/Vector (3).svg";
import { booking } from "../redux/flightBooking/actionTypes";
function BookingInputForm() {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const destinationFrom = form.from.value;
    const destinationTo = form.to.value;
    const journeyDate = form.date.value;
    const guests = form.guests.value;
    const classType = form.ticketClass.value;

    const bookingInfo = {
      destinationFrom,
      destinationTo,
      journeyDate,
      guests,
      classType,
    };

    dispatch(booking(bookingInfo));
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={handleBooking} className="first-hero lws-inputform">
          {/* Destination From */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox&apos;s Bazar</option>
              </select>
            </div>
          </div>

          {/* Destination To */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox&apos;s Bazar</option>
              </select>
            </div>
          </div>

          {/* Journey Date */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
            />
          </div>

          {/* Guests */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* Class */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingInputForm;