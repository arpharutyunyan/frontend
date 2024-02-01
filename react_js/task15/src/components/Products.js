import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../store/actions";

function Products(props) {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="products">
            <h2>Products</h2>
            <div className="list">
                {
                    products ? products.map(elem => (
                            <div className="item" key={elem.id}>
                                <p className="title">{elem.title}</p>
                                <p>{elem.category}</p>
                                <img src={elem.image} alt=''/>
                                <p>${elem.price}</p>
                            </div>
                        ))

                        : <p>no data</p>
                }

            </div>
        </div>
    );
}

export default Products;