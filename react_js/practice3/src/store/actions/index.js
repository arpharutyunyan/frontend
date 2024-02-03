import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
    'get-data',
    async (payload)=>{
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
           return data;
        }catch (e){
            console.log(e.response);
        }
    }
)

export const getAlbums = createAsyncThunk(
    'get-albums',
    async (id, thunkAPI)=>{
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
           return data;
        }catch (e){
            console.log(e.response);
        }
    }
)

export const getPhotos = createAsyncThunk(
    'get-photos',
    async (id, thunkAPI)=>{
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
           return data;
        }catch (e){
            console.log(e.response);
        }
    }
)

export const getTodos = createAsyncThunk(
    'get-todos',
    async (id, thunkAPI)=>{
        try {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
           return data;
        }catch (e){
            console.log(e.response);
        }
    }
)