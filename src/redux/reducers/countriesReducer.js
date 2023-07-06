import { ADD_CITY, MODIFY_POPULATION } from "../actions/actionTypes";

const initialState = {
  countries: [
    {
      code: 1,
      name: "morocco",
      population: 40000000,
      cities: [
        {
          name: "casablanca",
          capitale: false,
        },
        {
          name: "rabat",
          capitale: true,
        },
        {
          name: "sale",
          capitale: false,
        },
      ],
    },
    {
      code: 2,
      name: "usa",
      population: 40000000,
      cities: [
        {
          name: "casablanca",
          capitale: false,
        },
        {
          name: "rabat",
          capitale: true,
        },
        {
          name: "sale",
          capitale: false,
        },
      ],
    },
    {
      code: 3,
      name: "mexico",
      population: 40000000,
      cities: [
        {
          name: "casablanca",
          capitale: false,
        },
        {
          name: "rabat",
          capitale: true,
        },
        {
          name: "sale",
          capitale: false,
        },
      ],
    },
    {
      code: 4,
      name: "japan",
      population: 40000000,
      cities: [
        {
          name: "casablanca",
          capitale: false,
        },
        {
          name: "rabat",
          capitale: true,
        },
        {
          name: "sale",
          capitale: false,
        },
      ],
    },
  ],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      const { code, city } = action.payload;
      const updatedCountries = state.countries.map((country) => {
        if (country.code === code) {
          return {
            ...country,
            cities: [...country.cities, city],
          };
        }
        return country;
      });
      return {
        ...state,
        countries: updatedCountries,
      };
    case MODIFY_POPULATION:
      const { code: populationCode, population } = action.payload;
      const updatedCountriesPopulation = state.countries.map((country) => {
        if (country.code === populationCode) {
          return {
            ...country,
            population: population,
          };
        }
        return country;
      });
      return {
        ...state,
        countries: updatedCountriesPopulation,
      };
    default:
      return state;
  }
};

export default countriesReducer;
