import { GET_PET } from "./actions";

const initialState = { orders: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
