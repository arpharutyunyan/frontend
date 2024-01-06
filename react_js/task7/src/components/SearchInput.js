import React from 'react';
import {ReactComponent as SearchIcon} from '../assets/images/search.svg';
import PropTypes from "prop-types";

function SearchInput(props) {
    return (
        <form className="searchInput">
            <input type='text' name='search' value={props.value} onChange={props.onChange} placeholder="Search"/>
            <button className="searchIcon" onClick={props.onInputSubmit}>
                <SearchIcon/>
            </button>
        </form>
    );
}

export default SearchInput;

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onInputSubmit: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
    value: '',
    onChange: () => {
    },
    onInputSubmit: () => {
    },
}