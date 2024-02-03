import {createReducer} from "@reduxjs/toolkit";
import {getAlbums, getData, getPhotos, getTodos} from "../actions";

const initialState = {
    data: [],
    albums: [],
    photos: [],
    todos: [],
};

export default createReducer(initialState, builder => {
    builder
        .addCase(getData.fulfilled, (state, action)=>{
            state.data = action.payload;
        })
        .addCase(getAlbums.fulfilled, (state, action)=>{
            state.albums = action.payload;
        })
        .addCase(getPhotos.fulfilled, (state, action)=>{
            state.photos = action.payload;
        })
        .addCase(getTodos.fulfilled, (state, action)=>{
            state.todos = action.payload;
        })
})