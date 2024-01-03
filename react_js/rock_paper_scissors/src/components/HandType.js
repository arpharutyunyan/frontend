import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Rock} from '../assets/images/rock.svg';
import {ReactComponent as Paper} from '../assets/images/paper.svg';
import {ReactComponent as Scissors} from '../assets/images/scissors.svg';

const handType = {
    rock: Rock,
    paper: Paper,
    scissors: Scissors,
};

function HandType(props) {

    const {type, onSelect} = props;
    const HandComponent = handType[type];

    if (!HandComponent) {
        return null;
    }

    return (
        <div className="handType" data-key={type} onClick={() => onSelect(type)}>
            <HandComponent/>
        </div>
    );
}

export default HandType;

HandType.propTypes = {
    type: PropTypes.oneOf(['rock', 'paper', 'scissors']).isRequired,
    onSelect: PropTypes.func.isRequired
};

HandType.defaultProps = {
    type: '',
    onSelect: () => {
    }
}