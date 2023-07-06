const addCity = (code, city) => {
  return {
    type: "ADD_CITY",
    payload: {
      code: code,
      city: city,
    },
  };
};
export default addCity;
