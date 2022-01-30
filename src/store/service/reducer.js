const initialState = {
  allServices: [],
  specificService: [],
  gallaryData: [],
  allReservation: [],
  allCalendar: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SERVICE/fetchAllService":
      return {
        ...state,
        allServices: [...action.payload.allServices],
      };

    case "SERVICE/fetchServiceByName":
      return {
        ...state,
        specificService: [...action.payload.specificService],
      };

    case "GALLARY/fetchGallary":
      return {
        ...state,
        gallaryData: [...action.payload.gallaryData],
      };

    case "RESERVATION/fetchAllReservation":
      return {
        ...state,
        allReservation: [...action.payload.allReservation],
      };

    case "CALENDAR/fetchDates":
      return {
        ...state,
        allCalendar: [...action.payload.allCalendar],
      };

    default:
      return state;
  }
}