import {createReducer} from "@reduxjs/toolkit";
import {auth, getCandidateList, setCandidateVote} from "../actions";

const initialState = {
    token: localStorage.getItem('token') || null,
    person: {},
    error: '',
    candidates: [],
    isVoted: false,
};
export default createReducer(initialState, builder => {
        builder
            .addCase(auth.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.person = action.payload.person;
                state.error = '';
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(auth.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(getCandidateList.fulfilled, (state, action) => {
                state.candidates = action.payload.candidates;
                state.error = '';
            })
            .addCase(getCandidateList.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(setCandidateVote.fulfilled, (state, action) => {
                state.isVoted = true;
                state.error = '';
            })
            .addCase(setCandidateVote.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
)