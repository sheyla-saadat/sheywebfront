export const selectAllServices = (reduxState) => reduxState.service.allServices; /// meaning comming from slice service and all services is exactly comming from the very first initialstate in the reducer which had the empty array :))) my way of writing the selector with out redux consol . noe ready to deliver the data to the page
export const selectSpecificServices = (reduxState) =>
  reduxState.service.specificService;

export const selectGallaryData = (reduxState) => reduxState.service.gallaryData;
export const selectAllReservation = (reduxState) =>
  reduxState.service.allReservation;
export const selectAllCalendar = (reduxState) => reduxState.service.allCalendar;
