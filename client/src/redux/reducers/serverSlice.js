import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servers: [],
};

export const serverSlice = createSlice({
  name: "servers",
  initialState,
  reducers: {
    addServer: (state, action) => {
      state.servers = [...state.servers, action.payload];
    },
    deleteServer: (state, action) => {
      state.servers = state.servers.filter(
        (item) => item.id !== action.payload
      );
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addServer, deleteServer } = serverSlice.actions;

export default serverSlice.reducer;
