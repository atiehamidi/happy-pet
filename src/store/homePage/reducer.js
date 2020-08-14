const initialState = [
  {
    typeOfOrder: "walking and keeping",
    price: 2,
    image:
      "https://i.ibb.co/Fwm2z7z/Dog-concept-icons-set-with-walking-and-washing-symbols-cartoon-isolated-vector-illustration.jpg",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
