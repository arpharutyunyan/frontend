import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCard, clearCard, getBagData, minusFromCard, removeFromCard} from "../store/actions";

function Home(props) {
    const bagData = useSelector(state => state.bagData);
    const bagDataCount = useSelector(state => state.bagDataCount);
    const totalPrice = useSelector(state => state.totalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBagData());
    }, [dispatch]);

    return (
        <div className="home">
            <div className="header">
                <h3>Use Reducer</h3>
                <p>count <span>{bagDataCount}</span></p>
            </div>
            <div>
                <h3>Your Bag</h3>
                {
                    bagData.length ? bagData.map(elem => (
                        <div key={elem.id} className="item">
                            <img src={elem.img} alt=""/>
                            <div className="info">
                                <p>{elem.title}</p>
                                <p>${elem.price}</p>
                                <button onClick={() => dispatch(removeFromCard(elem.id))}>remove</button>
                            </div>
                            <div>
                                <button onClick={() => dispatch(addToCard(elem.id))}>+</button>
                                <p>{elem.amount}</p>
                                <button onClick={() => dispatch(minusFromCard(elem.id))}>-</button>
                            </div>
                        </div>
                    )) : <p>is currently empty</p>
                }
            </div>
            <hr/>
            <div className="total">
                <p>Total</p>
                <p>${totalPrice}</p>
            </div>
            <button onClick={() => dispatch(clearCard())}>Clear Card</button>
        </div>
    );
}

export default Home;