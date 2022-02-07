export const countryCodeReducer = (state = "worldwide", action) => {
  switch (action.type) {
    case "COUNTRY CODE":
      return (state = action.payload);
    default:
      return state;
  }
};
