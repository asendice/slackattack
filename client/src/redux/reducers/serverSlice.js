import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getServers = createAsyncThunk(
  "servers/getServers",
  async (dispatch, getState) => {
    return await axios
      .get("http://localhost:8000/api/servers")
      .then((res) => res.data.result);
  }
);
export const postServer = createAsyncThunk(
  "servers/postServers",
  async (server) => {
    const json = JSON.stringify(server);
    return await axios
      .post("http://localhost:8000/api/servers", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data.result);
  }
);

const initialState = {
  servers: [],
  status: null,
};

export const serverSlice = createSlice({
  name: "servers",
  initialState,
  reducers: {
    addServers: (state, action) => {
      state.servers = action.payload;
    },
    addServer: (state, action) => {
      state.servers = [...state.servers, action.payload];
    },
    deleteServer: (state, action) => {
      state.servers = state.servers.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [getServers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getServers.fulfilled]: (state, action) => {
      state.status = "success";
      state.servers = action.payload;
    },
    [getServers.rejected]: (state, action) => {
      state.status = "failed";
    },
    [postServer.pending]: (state, action) => {
      state.status = "loading";
    },
    [postServer.fulfilled]: (state, action) => {
      state.status = "success";
      state.servers = [...state.servers, action.payload];
    },
    [postServer.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addServer, addServers, deleteServer } = serverSlice.actions;

export default serverSlice.reducer;
