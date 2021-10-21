import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  frame: "Feed",
};

export const frameSlice = createSlice({
  name: "frame",
  initialState,
  reducers: {
    setFrame: (state, action) => {
      state.frame = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFrame } = frameSlice.actions;

export default frameSlice.reducer;
