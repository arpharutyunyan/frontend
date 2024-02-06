import {createAction} from "@reduxjs/toolkit";

export const setShowModal = createAction('set-show-modal');
export const setSeatNumber = createAction('set-seat-number');
export const setBookData = createAction('set-book-data');
export const setBookDataFromStorage = createAction('set-book-data-from-storage');