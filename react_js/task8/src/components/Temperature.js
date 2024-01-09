import React from 'react';
import PropTypes from "prop-types";

function Temperature(props) {

    const {temperatureData} = props;

    return (
        temperatureData ? (
            <div className="temperature">
                <p>Now Temperature = {temperatureData.now}</p>
                <p>Max Temperature = {temperatureData.max}</p>
                <p>Min Temperature = {temperatureData.min}</p>
            </div>
        ) : (
            <div className="temperature">
                <p>Country data not found</p>
            </div>
        )
    );
}

export default Temperature;

Temperature.propTypes = {
    temperatureData: PropTypes.object.isRequired
};

Temperature.defaultProps = {
    temperatureData: {},
};