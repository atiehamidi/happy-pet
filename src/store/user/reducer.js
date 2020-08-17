import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  NEW_PET_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  pets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case NEW_PET_SUCCESS:
      return { ...state, pets: [...state.pets, { ...action.payload }] };

    default:
      return state;
  }
};
