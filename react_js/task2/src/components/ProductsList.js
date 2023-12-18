import React, {Component} from "react";
import PropTypes from 'prop-types';

class ProductsList extends Component {
    render() {
        const {title, description, price, stars} = this.props;
        return (
            <div className="product">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Stars: {stars}</p>
            </div>
        );
    }
}

export default ProductsList;

ProductsList.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
}

ProductsList.defaultProps = {
    title: '',
    price: 0,
    stars: 0,
}