import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
    'get-categories',
    async (payload) => {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products/categories');
            return data;
        } catch (e) {
            console.log(e);
        }
    }
);

export const getAllProducts = createAsyncThunk(
    'get-all-products',
    async (payload) => {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products');
            return data;
        } catch (e) {
            console.log(e.response);
        }
    }
)

export const getFilteredProducts = createAsyncThunk(
    'get-filtered-products',
    async (searchParams, thunkAPI) => {
        try {
            const {data} = await axios.get(`https://fakestoreapi.com/products/category/${searchParams}`);
            return data;
        } catch (e) {
            console.log(e.response);
        }
    }
)

