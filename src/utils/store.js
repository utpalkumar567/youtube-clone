import { configureStore } from "@reduxjs/toolkit";
import hamburgerslice from "./hamburgerslice";

const store = configureStore({
  reducer: {
    hamburger: hamburgerslice,
  },
});

export default store;
