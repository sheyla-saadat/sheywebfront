export const selectAllServices = (reduxState) => reduxState.service.allServices;

export const selectSpecificServices = (reduxState) =>
  reduxState.service.specificService;

export const selectGallaryData = (reduxState) => reduxState.service.gallaryData;

export const selectAllReservation = (reduxState) =>
  reduxState.service.allReservation;

export const selectAllCalendar = (reduxState) => reduxState.service.allCalendar;
