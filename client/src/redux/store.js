import { configureStore } from "@reduxjs/toolkit";
import serverReducer from "./reducers/serverSlice";
import frameReducer from "./reducers/frameSlice";
import serverFormReducer from "./reducers/serverFormSlice";
import selectedServerReducer from "./reducers/selectedServer";

export const store = configureStore({
  reducer: {
    servers: serverReducer,
    frame: frameReducer,
    serverForm: serverFormReducer,
    selectedServer: selectedServerReducer,
  },
});
