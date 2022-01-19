import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appDoneLoading, appLoading } from "../appState/actions";

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
