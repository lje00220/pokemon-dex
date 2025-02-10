import { configureStore } from "@reduxjs/toolkit";
import pokemon from "../slices/pokemon";

/**
 * Redux Store 설정
 */

const store = configureStore({
  reducer: {
    pokemon,
  },
});

export default store;
