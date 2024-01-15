import React from 'react';
import PropTypes from "prop-types";

function AmountInput(props) {
    return (
        <div className="amountInput">
            <label>Enter Amount</label>
            <input id="amount" name="amount" onChange={(e) => props.onHandleInputValue(e.target.value)}
                   value={props.value}/>
        </div>
    );
}

export default AmountInput;

AmountInput.propTypes = {
    onHandleInputValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

AmountInput.defaultProps = {
    onHandleInputValue: () => {
    },
    value: '',
}