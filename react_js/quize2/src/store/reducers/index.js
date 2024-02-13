import {createReducer} from "@reduxjs/toolkit";
import {addToCard, clearCard, getBagData, minusFromCard, removeFromCard} from "../actions";

const initialState = {
    bagData: [],
    totalPrice: 0,
    bagDataCount: 0,
};

export default createReducer(initialState, builder => {
    builder
        .addCase(getBagData.fulfilled, (state, action) => {
            state.bagData = action.payload;
            state.bagDataCount = action.payload.length;
            state.totalPrice = action.payload.reduce((total, item) => total + item.amount * parseFloat(item.price), 0);
        })
        .addCase(addToCard, (state, action) => {
            state.bagDataCount += 1;
            const foundElem = state.bagData.find(item => item.id === action.payload);
            foundElem.amount += 1;
            state.totalPrice += parseFloat(foundElem.price);
        })
        .addCase(minusFromCard, (state, action) => {
            const foundElem = state.bagData.find(item => item.id === action.payload);

            if (foundElem.amount) {
                foundElem.amount -= 1;
                state.bagDataCount -= 1;
                state.totalPrice -= parseFloat(foundElem.price);
            }
        })
        .addCase(removeFromCard, (state, action) => {
            const foundElem = state.bagData.find(item => item.id === action.payload);
            state.bagDataCount -= foundElem.amount;
            state.totalPrice -= foundElem.amount * parseFloat(foundElem.price);
            state.bagData = state.bagData.filter(item => item.id !== action.payload);
        })
        .addCase(clearCard, (state, action) => {
            state.bagDataCount = 0;
            state.totalPrice = 0;
            state.bagData = [];
        })
})