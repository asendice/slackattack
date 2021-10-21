import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  password: "",
  description: "",
  picture: "",
  admin: "",
};

export const serverFormSlice = createSlice({
  name: "serverForm",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setPicture: (state, action) => {
      state.picture = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setPassword, setDescription, setPicture, setAdmin } =
  serverFormSlice.actions;

export default serverFormSlice.reducer;
