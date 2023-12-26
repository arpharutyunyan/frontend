import React from 'react';
import PropTypes from "prop-types";


function Button(props){
    const {buttonText, onClick} = props;

    return (
        <button onClick={onClick}>{buttonText}</button>
    );
}

export default Button;

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    buttonText: '',
    onClick: () => {},
}