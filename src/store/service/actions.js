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
