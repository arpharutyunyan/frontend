import React from 'react';
import PropTypes from "prop-types";
import HandType from "./HandType";

function ChosenHandType(props) {
    const {computerChoice, playerChoice, result, onClose} = props;

    return (
        <div className="chosenHandType">
            <button className="close" onClick={onClose}>X</button>
            <div className="handTypes">
                <HandType type={playerChoice}/>
                <HandType type={computerChoice}/>
            </div>
            <div className="chosenHandType__text">
                <p>Computer Chose:{computerChoice.toUpperCase()}</p>
                <p>Result: {result.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default ChosenHandType;

ChosenHandType.propTypes = {
    computerChoice: PropTypes.string.isRequired,
    playerChoice: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

ChosenHandType.defaultProps = {
    computerChoice: '',
    playerChoice: '',
    result: '',
    onClose: () => {
    }
}