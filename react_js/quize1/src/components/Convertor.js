import React, {useEffect, useState} from 'react';
import Api from "../Api";
import Select from "react-select";
import PropTypes from "prop-types";

function Convertor(props) {
    const [countryList, setCountryList] = useState(null);

    const {onHandleChange} = props;

    useEffect(() => {
        console.log('Convertor useeffect');
        (async () => {
            try {
                let countryData = await Api.getCountryData();
                setCountryList(countryData.data);
            } catch (e) {
                console.error(e);
            }
        })()
    }, []);

    return (
        countryList ?
            <Select
                className="basic-single"
                classNamePrefix="select"
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isSearchable={true}
                name="country"
                options={Object.keys(countryList).map((currencyCode) => ({
                    value: currencyCode,
                    // label: countryList[currencyCode],
                    label: currencyCode.toUpperCase(),
                }))}
                onChange={onHandleChange}
            />
            : null
    );
}

export default Convertor;

Convertor.propTypes = {
    onHandleChange: PropTypes.func.isRequired,
};

Convertor.defaultProps = {
    onHandleChange: () => {
    },
};