import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../store/actions";
import _ from "lodash";

function Home(props) {
    const [passportOrIdCard, setPassportOrIdCard] = useState('');
    const errorMessage = useSelector(state => state.error);
    const person = useSelector(state => state.person);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!_.isEmpty(person) && token) {
            navigate('/election');
        }
    }, [person, navigate, token]);

    const handleFormSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(auth(passportOrIdCard));
    }, [dispatch, passportOrIdCard]);

    const handlePassportValue = useCallback((e) => {
        setPassportOrIdCard(e.target.value);
    }, []);

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form onSubmit={(e) => handleFormSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Passport or ID Card</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Passport"
                                value={passportOrIdCard}
                                onChange={handlePassportValue}
                            />
                            {
                                errorMessage ? (
                                    <p className="text-danger">{errorMessage}</p>
                                ) : null
                            }
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;