import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const GET_ORDERS = "GET_ORDERS";
const getOrders = (state) => {
  return {
    type: GET_ORDERS,
    payload: state,
  };
};

export const fetchOrders = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());

      dispatch(appLoading());
      console.log("after loading run");
      const res = await axios.get(`${apiUrl}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // dispatch(
      //   showMessageWithTimeout("success", false, res.data.message, 3000)
      // );

      dispatch(getOrders(res.data.orders));

      dispatch(appDoneLoading());
    } catch (error) {
      console.log("error of fetchPet", error);
    }
  };
};

function refreshPage() {
  window.location.reload(false);
}

export const changeOrders = (id) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());

      dispatch(appLoading());
      console.log("after loading run", id, token);
      const res = await axios.patch(
        `${apiUrl}/admin/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        showMessageWithTimeout(
          "success Done a Service",
          false,
          res.data.message,
          3000
        )
      );
      console.log("fetchpet result is", res.data.orders);
      dispatch(getOrders(res.data.orders));
      dispatch(appDoneLoading());
      refreshPage();
    } catch (error) {
      console.log("error of fetchPet", error);
    }
  };
};
