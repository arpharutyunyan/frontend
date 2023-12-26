import React from 'react';
import Button from "./Button";
import PropTypes from "prop-types";

function AddForm(props) {
    return (
        <form>
            <input type="text" onChange={props.handleInputValue} value={props.inputValue}/>
            <Button buttonText="Add item" onClick={props.handleAddItem}/>
        </form>
    );
}

export default AddForm;

AddForm.propTypes = {
    handleInputValue: PropTypes.func.isRequired,
    handleAddItem: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
};

AddForm.defaultProps = {
    handleInputValue: () => {},
    handleAddItem: () => {},
    inputValue: '',
}