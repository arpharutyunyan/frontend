import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const auth = createAsyncThunk(
    'auth',
    async (passportOrIdCard, thunkAPI) => {
        try {
            const {data} = await api.post('/people/auth', {passportOrIdCard});
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

export const getCandidateList = createAsyncThunk(
    'get-candidate-list',
    async (thunkAPI) => {
        try {
            const {data} = await api.get('/candidates/');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

export const setCandidateVote = createAsyncThunk(
    'set-candidate-vote',
    async (requestData, thunkAPI) => {
        try {
            console.log(requestData)
            const {data} = await api.put('/candidates/vote', {...requestData});
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)