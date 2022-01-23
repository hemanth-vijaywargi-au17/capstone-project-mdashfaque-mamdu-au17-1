import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./index";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
