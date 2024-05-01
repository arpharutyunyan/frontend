import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api";


export const registerRequest = createAsyncThunk('users/registerRequest', async (payload, thunkAPI) => {
  try {
    console.log(payload)
    const { data } = await Api.register(payload);
    console.log(data)
    return data;
  } catch (e) {
    console.log('aaaaaaa')
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
export const usersListRequest = createAsyncThunk('users/usersListRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.usersList(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

export const profileRequest = createAsyncThunk('users/profileRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.profile(payload);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
export const singleUserRequest = createAsyncThunk('users/singleUserRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.singleUser(payload.friendId);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})
