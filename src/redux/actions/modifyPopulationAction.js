const modifyPopulation = (code, population) => {
  return {
    type: "MODIFY_POPULATION",
    payload: {
      code: code,
      population: population,
    },
  };
};
export default modifyPopulation;
