import React, {Component} from 'react';
import PropTypes from "prop-types";

class Button extends Component {
    render() {
        const {buttonText, onClick} = this.props;

        return (
            <button onClick={onClick}>{buttonText}</button>
        );
    }
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