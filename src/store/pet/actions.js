import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const GET_PET = "GET_PET";
const getPet = (state) => {
  return {
    type: GET_PET,
    payload: state,
  };
};

export const fetchPet = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      console.log(token);
      dispatch(appLoading());
      console.log("after loading run");
      const res = await axios.get(`${apiUrl}/dashboard/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("action fetchPet");
      dispatch(
        showMessageWithTimeout("success", false, res.data.message, 3000)
      );
      console.log("fetchpet result is", res.data.order);
      // dispatch(getPet(res.data.order));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error of fetchPet", error);
    }
  };
};
