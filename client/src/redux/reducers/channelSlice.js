import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getChannels = createAsyncThunk(
  "channels/getChannels",
  async (serverId) => {
    return await axios
      .get(`http://localhost:8000/api/channels/${serverId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data.result);
  }
);
// export const postServer = createAsyncThunk(
//   "servers/postServers",
//   async (server) => {
//     const json = JSON.stringify(server);
//     return await axios
//       .post("http://localhost:8000/api/servers", json, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => res.data.result);
//   }
// );

const initialState = {
  channels: [],
  status: null,
};

export const channelSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addChannels: (state, action) => {
      state.channels = action.payload;
    },
    addChannel: (state, action) => {
      state.channels = [...state.channels, action.payload];
    },
    deleteChannel: (state, action) => {
      state.channels = state.channels.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [getChannels.pending]: (state, action) => {
      state.status = "loading";
    },
    [getChannels.fulfilled]: (state, action) => {
      state.status = "success";
      state.channels = action.payload;
    },
    [getChannels.rejected]: (state, action) => {
      state.status = "failed";
    },
    // [postChannel.pending]: (state, action) => {
    //   state.status = "loading";
    // },
    // [postChannel.fulfilled]: (state, action) => {
    //   state.status = "success";
    //   state.channels = [...state.channels, action.payload];
    // },
    // [postChannel.rejected]: (state, action) => {
    //   state.status = "failed";
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addChannel, addChannels, deleteChannel } = channelSlice.actions;

export default channelSlice.reducer;
