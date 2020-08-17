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
  console.log("action fetchPet");
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      dispatch(appLoading());
      const res = await axios.get(`${apiUrl}/dashboard/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(
        showMessageWithTimeout("success", false, res.data.message, 3000)
      );
      console.log(res.data.orders);
      dispatch(getPet(res.data.orders));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
    }
  };
};
