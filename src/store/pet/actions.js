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

      dispatch(appLoading());

      const res = await axios.get(`${apiUrl}/dashboard/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // dispatch(
      //   showMessageWithTimeout("success", false, res.data.message, 3000)
      // );
      console.log("fetchpet result is", res.data.order);
      dispatch(getPet(res.data.order));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error of fetchPet", error);
    }
  };
};

export const addOrder = (
  id,
  start,
  end,
  serviceId,
  latitude,
  longitude,
  descriptionOfOrder,
  total
) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());

      dispatch(appLoading());

      const res = await axios.post(
        `${apiUrl}/neworder/${id}`,
        {
          start,
          end,
          serviceId,
          latitude,
          longitude,
          descriptionOfOrder,
          total,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("teeeeeest", res.data);
    } catch (error) {
      console.log("error of fetchPet", error);
    }
  };
};
