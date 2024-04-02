import { createReducer } from "@reduxjs/toolkit";
import {loginRequest} from "../actions/users";

const initialState = {
  profile: {},
  token: localStorage.getItem('token'),
}

const users = createReducer(initialState, builder => {
  builder.addCase(loginRequest.fulfilled, (state, action) => {
    state.profile = action.payload.user;
    localStorage.setItem('token', action.payload.token);
  })
})
export default users;
