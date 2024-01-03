import React from 'react';
import PropTypes from "prop-types";

function Result(props) {
    const {computerScore, playerScore} = props;

    return (
        <div className="result">
            <p>Computer: {computerScore}</p>
            <p>YOU: {playerScore}</p>
        </div>
    );
}

export default Result;

Result.propTypes = {
    computerScore: PropTypes.number.isRequired,
    playerScore: PropTypes.number.isRequired,
};

Result.defaultProps = {
    computerScore: 0,
    playerScore: 0,
};