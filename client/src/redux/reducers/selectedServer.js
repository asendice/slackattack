import { createSlice } from "@reduxjs/toolkit";

export const selectedServer = createSlice({
  name: "selectedServer",
  initialState: {server: {}},
  reducers: {
    setServer: (state, action) => {
      state.server = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setServer } = selectedServer.actions;

export default selectedServer.reducer;
