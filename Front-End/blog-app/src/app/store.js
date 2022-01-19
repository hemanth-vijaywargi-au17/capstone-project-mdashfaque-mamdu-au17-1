import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
import appReducer from "../Slices/appSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
