import React, {Component} from "react";
import PropTypes from 'prop-types';
// import {ReactComponent as SvgImage} from '../assets/images/image1.svg';


class ProductsList extends Component {
    render() {
        const {img, title, description, price} = this.props;

        return (
            <div className='productsList'>
                {/*<SvgImage />*/}
                <img src={img} className="image__block" style={{backgroundColor: img}} alt=""></img>
                <div>
                    <p className="product__title">{title}</p>
                    <p className="product__desc">{description}</p>
                    <p className="product__price">$ {price}</p>
                </div>
            </div>
        )
    }
}

export default ProductsList;

ProductsList.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

ProductsList.defaultProps = {
    title: "",
    description: "default desc",
    price: 0,
}