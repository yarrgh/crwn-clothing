import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
