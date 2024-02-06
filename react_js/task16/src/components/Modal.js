import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBookData, setShowModal} from "../store/actions";

function Modal(props) {
    const tempSeatNumber = useSelector(state => state.tempSeatNumber);
    const dispatch = useDispatch();

    const handleSelectedSeat = useCallback((e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        const allEmpty = Object.values(formDataObject).every(value => value === '');
        if (!allEmpty) {
            dispatch(setBookData(formDataObject));
        }

        dispatch(setShowModal(false));
    }, [dispatch]);

    return (
        <div className="modal">
            <form onSubmit={(e) => handleSelectedSeat(e)}>
                <label>Name</label>
                <input type='text' name="name"/>
                <label>Last Name</label>
                <input type='text' name="lastName"/>
                <label>Phone</label>
                <input type='text' name="phone"/>
                <label>Row</label>
                <input type='text' name="row" defaultValue={tempSeatNumber.row} readOnly/>
                <label>Seat</label>
                <input type='text' name="seat" defaultValue={tempSeatNumber.seat} readOnly/>
                <button type='submit'>Save</button>
            </form>

        </div>
    );
}

export default Modal;