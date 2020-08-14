import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const GET_SERVICES = "GET_SERVICES";
export const GET_CLIENTS = "GET_CLIENTS";

const getServices = (state) => {
  return {
    type: GET_SERVICES,
    payload: state,
  };
};

const getClients = (state) => {
  return {
    type: GET_CLIENTS,
    payload: state,
  };
};

export function fetchServices() {
  console.log("action ruuuuun");
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`${apiUrl}/type`);
      console.log(res.data);
      dispatch(getServices(res.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchClients() {
  console.log("action fetchClients");
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(`${apiUrl}/clients`);
      console.log(res.data);
      dispatch(getClients(res.data));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
}
