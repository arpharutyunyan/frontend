import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {createAction} from "@reduxjs/toolkit";

export const getBagData = createAsyncThunk(
    'get-bag-data',
    async (payload) => {
        try {
            const {data} = await axios.get('https://course-api.com/react-useReducer-cart-project');
            console.log(data)
            return data;
        } catch (e) {
            console.log(e);
        }
    }
);

export const addToCard = createAction('add-to-card');
export const minusFromCard = createAction('minus-from-card');
export const removeFromCard = createAction('remove-from-card');
export const clearCard = createAction('clear-card');