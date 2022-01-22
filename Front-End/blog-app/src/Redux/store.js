import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/app";
import userReducer from "./Slices/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
