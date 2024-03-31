import React, {useEffect, useState} from 'react';
import _ from "lodash";
import {io} from "socket.io-client";

const {REACT_APP_API_URL} = process.env;
let socket;

function Blocks(props) {
    const [openedBlockList, setOpenedBlockList] = useState([]);

    useEffect(() => {
        socket = io(REACT_APP_API_URL);

        socket.on('connect', () => {
            console.log('connected');
        })

        socket.on('open-block', (data) => {
            if (!openedBlockList.includes(data.buttonId)) {
                setOpenedBlockList(prevList => [...prevList, data.buttonId]);
            }
        })
    }, [openedBlockList]);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                {
                    _.range(1, 10).map(elem => (
                        <div
                            key={elem}
                            className={`d-flex justify-content-center ${openedBlockList.includes(elem) ? 'border-success' : 'border-1'} border p-3`}
                        >
                            {elem}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Blocks;