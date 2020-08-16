import { GET_SERVICES, GET_CLIENTS } from "./actions";
const initialState = {
  services: [
    {
      // id: 3,
      // typeOfOrder: "walking and keeping",
      // price: 2,
      // image:
      //   "https://i.ibb.co/Fwm2z7z/Dog-concept-icons-set-with-walking-and-washing-symbols-cartoon-isolated-vector-illustration.jpg",
    },
  ],
  clients: [{}],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return { ...state, services: [...action.payload] };

    case GET_CLIENTS: {
      return { ...state, clients: [...action.payload] };
    }

    default:
      return state;
  }
};
