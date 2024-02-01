import {createReducer} from "@reduxjs/toolkit";
import {getAllProducts, getCategories, getFilteredProducts} from "../actions";

const initialState = {
    categories: [],
    products: [],
};
export default createReducer(initialState, builder => {
    builder
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        .addCase(getFilteredProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })

})