import {createReducer} from "@reduxjs/toolkit";
import {setBookData, setSeatNumber, setShowModal} from "../actions";

const initialState = {
    showModal: false,
    seatData: JSON.parse(localStorage.getItem('selectedSeats')),
    tempSeatNumber: {},
};

const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

export default createReducer(initialState, builder => {
    builder
        .addCase(setShowModal, (state, action) => {
            state.showModal = action.payload;
        })
        .addCase(setSeatNumber, (state, action) => {
            state.tempSeatNumber = action.payload;
        })
        .addCase(setBookData, (state, action) => {
            state.seatData = [...state.seatData, action.payload];
            state.tempSeatNumber = {};

            if (selectedSeats) {
                localStorage.removeItem('selectedSeats');
            }

            localStorage.setItem('selectedSeats', JSON.stringify(state.seatData));
        })
})