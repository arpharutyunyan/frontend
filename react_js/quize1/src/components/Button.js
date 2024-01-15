import React from 'react';
import PropTypes from "prop-types";

function Button(props) {
    return (
        <div className="button">
            <button onClick={(e) => props.onClick(e)}>Get Exchange Rate</button>
        </div>
    );
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    onClick: () => {
    },
};