import { GET_SERVICES } from "./actions";
const initialState = [
  {
    id: 2,
    typeOfOrder: "walking and keeping",
    price: 2,
    image:
      "https://i.ibb.co/Fwm2z7z/Dog-concept-icons-set-with-walking-and-washing-symbols-cartoon-isolated-vector-illustration.jpg",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return [...action.payload];

    default:
      return state;
  }
};
