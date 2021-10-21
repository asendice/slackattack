import { configureStore } from "@reduxjs/toolkit";
import serverReducer  from "./reducers/serverSlice";

export const store = configureStore({
  reducer: {
    servers: serverReducer,
  },
});
