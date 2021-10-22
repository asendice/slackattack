import { createSlice } from "@reduxjs/toolkit";

export const selectedChannel = createSlice({
  name: "selectedChannel",
  initialState: { channel: {} },
  reducers: {
    setChannel: (state, action) => {
      state.channel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChannel } = selectedChannel.actions;

export default selectedChannel.reducer;
