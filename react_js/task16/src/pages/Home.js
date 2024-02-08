import React, {useCallback} from 'react';
import _ from 'lodash';
import {createPortal} from "react-dom";
import Modal from "../components/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setSeatNumber, setShowModal} from "../store/actions";
import {CSSTransition} from "react-transition-group";

const numRows = 10;
const numCols = 20;

function Home(props) {
    const seatData = useSelector(state => state.seatData);
    const showModal = useSelector(state => state.showModal);

    const dispatch = useDispatch();

    const handleSeatNumber = useCallback((row, col) => {
        const tempSeatNumber = {
            row: row,
            seat: col,
        };

        dispatch(setSeatNumber(tempSeatNumber));
        dispatch(setShowModal(true));
    }, [dispatch]);

    return (
        <div className="home">
            <table>
                <tbody>
                {
                    _.range(numRows).map((row, rowIndex) => {
                        return <tr key={rowIndex}>
                            {
                                _.range(numCols).map((col, colIndex) => {
                                    const seatNumber = `${rowIndex + 1}/${colIndex + 1}`;
                                    return <td
                                        key={colIndex}
                                        onClick={() => handleSeatNumber(rowIndex + 1, colIndex + 1)}
                                        className={seatData.find(elem => +elem.row === rowIndex + 1 && +elem.seat === colIndex + 1) ? 'booking' : ''}
                                    >
                                        {seatNumber}
                                    </td>
                                })
                            }
                        </tr>

                    })
                }
                </tbody>
            </table>

            <CSSTransition
                in={showModal}
                timeout={1000}
                classNames="modal_animation"
                unmountOnExit
            >
                {() => createPortal(<Modal/>, document.body)}
            </CSSTransition>

        </div>
    );
}

export default Home;