import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBookData, setShowModal} from "../store/actions";
import _ from 'lodash';

function Modal(props) {
    const tempSeatNumber = useSelector(state => state.tempSeatNumber);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        row: tempSeatNumber.row,
        seat: tempSeatNumber.seat
    });

    const handleInputChange = useCallback((e) => {
        const {name, value} = e.target;
        const inputValues = {
            ...(_.set(formData, name, value)),
            row: tempSeatNumber.row,
            seat: tempSeatNumber.seat
        }
        setFormData(inputValues);
    }, [formData, tempSeatNumber]);

    const handleSelectedSeat = useCallback((e) => {
        e.preventDefault();

        const allEmpty = Object.values(formData).some(value => value === '');
        if (!allEmpty) {
            dispatch(setBookData(formData));
        }

        dispatch(setShowModal(false));
    }, [formData, dispatch]);

    return (
        <div className="modal">
            <form onSubmit={(e) => handleSelectedSeat(e)}>
                <label>Name</label>
                <input type='text' name="name" value={formData.name} onChange={handleInputChange}/>
                <label>Last Name</label>
                <input type='text' name="lastName" value={formData.lastName} onChange={handleInputChange}/>
                <label>Phone</label>
                <input type='text' name="phone" value={formData.phone} onChange={handleInputChange}/>
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