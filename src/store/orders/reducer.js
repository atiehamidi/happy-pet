import { GET_ORDERS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS: {
      return action.payload;
    }
    default:
      return state;
  }
};
