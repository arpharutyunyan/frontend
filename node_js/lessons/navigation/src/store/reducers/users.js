import { createReducer } from "@reduxjs/toolkit";
import { loginRequest, profileRequest, singleUserRequest, usersListRequest } from "../actions/users";
import { socketUserOffline, socketUserOnline } from "../actions/socket";
import moment from "moment";

const initialState = {
  profile: {},
  // token: localStorage.getItem('token') || '',
  usersList: [],
  friend: {},
  onlineUsers: [],
}

const users = createReducer(initialState, builder => {
  builder
    .addCase(loginRequest.fulfilled, (state, action) => {
      state.profile = action.payload.user;
      state.token = action.payload.token;
      // localStorage.setItem('token', action.payload.token);
    })
    .addCase(usersListRequest.fulfilled, (state, action) => {
      const { users } = action.payload;
      state.usersList = users;
    })
    .addCase(profileRequest.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.profile = user;
    })
    .addCase(singleUserRequest.pending, (state, action) => {
      state.friend = {};
    })
    .addCase(singleUserRequest.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.friend = user;
    })
    .addCase(socketUserOnline, (state, action) => {
      const { userId } = action.payload;
      state.usersList = state.usersList.map((u) => {
        if (+u.id === +userId) {
          u.isOnline = true
        }
        return u
      })
    })
    .addCase(socketUserOffline, (state, action) => {
      const { userId } = action.payload;
      state.usersList = state.usersList.map((u) => {
        if (+u.id === +userId) {
          u.isOnline = false
          u.lastVisit = moment().toISOString()
        }
        return u
      })
    })
})
export default users;
