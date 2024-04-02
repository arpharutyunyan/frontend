import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";


export const registerRequest = createAsyncThunk('users/registerRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.register(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const loginRequest = createAsyncThunk('users/loginRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.login(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
