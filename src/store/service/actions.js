import axios from "axios";
import { useState } from "react";
import { apiUrl } from "../../config/constants";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../appState/actions";
import { selectToken } from "../user/selectors";

export const fetchService = (data) => {
  return {
    type: "SERVICE/fetchAllService",
    payload: data,
  };
};

export const fetchAllService = () => {
  return async (dispatch, getState) => {
    console.log("I'm here inside fetchAllServices action"); // tested raw working///after back rout seen the data in the consol.

    const response = await axios.get(`${apiUrl}/service`);

    console.log("All data from service:", response.data); // from now on im interested only about .data and not the otheres .now i ask him to dspatch fetchservive but this time get response.data in the payload instead of data .now to the reducer.....

    dispatch(fetchService(response.data));
  };
};
export const fetchSpecificServiceByName = (data) => {
  return {
    type: "SERVICE/fetchServiceByName",
    payload: data,
  };
};
///// this one is the same as we were doing befor with :id
export const fetchServiceByName = (name) => {
  return async (dispatch, getState) => {
    console.log("I'm here inside fetchSpecificServiceByName action");

    const response = await axios.get(`${apiUrl}/service/${name}`);

    console.log("All data from specific service:", response.data);

    dispatch(fetchSpecificServiceByName(response.data));
  };
};
/////// since the Gallary dosnt do much I decided to keep the action in the same slice
export const fetchGallaryData = (data) => {
  return {
    type: "GALLARY/fetchGallary",
    payload: data,
  };
};

export const fetchGallary = () => {
  return async (dispatch, getState) => {
    console.log("I'm here inside fetchGallaryData action");
    ////// tested got it ..
    const response = await axios.get(`${apiUrl}/service/gallary`);

    console.log("All data from gallary:", response.data);

    dispatch(fetchGallaryData(response.data));
  };
}; //// the error i had in here was solved in the back by changing the place of the dynamic rout with this one . lesson learned was to always keep the dynamic routs in the back  the last one . thats it :)))
export const makeReservation = (serviceId, dateTime) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    try {
      console.log("I'm here inside makeReservation action");

      const response = await axios.post(
        `${apiUrl}/service/reservation`,
        {
          serviceId,
          dateTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response of make reservation is", response.data);

      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "New reservation created!",
          3000
        )
      );
    } catch (error) {
      if (error.response) {
        console.log(error.response);

        dispatch(
          showMessageWithTimeout("danger", false, "Fill to reserve", 3000)
        );
      }
    }
  };
};

export const fetchReservation = (data) => {
  return {
    type: "RESERVATION/fetchAllReservation",
    payload: data,
  };
};

export const fetchAllReservationForAdmin = () => {
  return async (dispatch, getState) => {
    console.log("I'm here inside fetchAllReservationForAdmin action");

    const response = await axios.get(`${apiUrl}/service/reservation`);

    console.log("All data from reservation:", response.data);

    dispatch(fetchReservation(response.data));
  };
};

export const updateReservation = (description, reservationId) => {
  return async (dispatch, getState) => {
    await axios.patch(`${apiUrl}/service/reservation`, {
      description,
      isConfirmed: true,
      reservationId,
    });

    const response = await axios.get(`${apiUrl}/service/reservation`);

    dispatch(fetchAllReservationForAdmin(response.data));
    dispatch(
      showMessageWithTimeout(
        "success",
        false,
        "Description in reservation table is updated!",
        3000
      )
    );
  };
};

export const fetchCalender = (data) => {
  return {
    type: "CALENDAR/fetchDates",
    payload: data,
  };
};

export const fetchAllCalendar = () => {
  return async (dispatch, getState) => {
    console.log("I'm here inside fetchAllCalendar action");

    const response = await axios.get(`${apiUrl}/service/calendar`);

    console.log("All data from calendar:", response.data);

    dispatch(fetchCalender(response.data));
  };
};

export const setCalendar = (dateTime) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    try {
      console.log("I'm here inside setCalendar action");

      const response = await axios.post(
        `${apiUrl}/service/calendar`,
        {
          dateTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response of calendar is", response.data);

      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "New calendar date and time created!",
          1500
        )
      );

      dispatch(fetchAllCalendar());
    } catch (error) {
      if (error.response) {
        console.log(error.response);

        dispatch(
          showMessageWithTimeout(
            "danger",
            false,
            "The time is not set yet",
            3000
          )
        );
      }
    }
  };
};
