import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./redux/reducers/countriesReducer";

const Store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
export default Store;
