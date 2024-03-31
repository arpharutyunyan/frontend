import React, {useCallback, useEffect} from 'react';
import _ from 'lodash';
import {io} from 'socket.io-client';

const {REACT_APP_API_URL} = process.env;

let socket;

function Buttons(props) {

    useEffect(() => {
        socket = io(REACT_APP_API_URL);

        socket.on('connect', () => {
            console.log('connected');
        })
    }, []);

    const handleButtonClick = useCallback((e, buttonId) => {
        e.preventDefault();
        socket.emit('click-button', {
            buttonId
        })
    }, []);

    return (
        <div className='container mt-5'>
            <div className="d-flex justify-content-between align-items-center">
                {
                    _.range(1, 10).map(elem => (
                        <button
                            key={elem}
                            className="btn btn-primary"
                            type="button"
                            onClick={(e) => handleButtonClick(e, elem)}
                        >
                            {elem}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default Buttons;