import React, {useEffect, useState} from 'react';
import Select from "react-select";
import PropTypes from "prop-types";

function CountryList(props) {
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    const [countryOptions, setCountryOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const {onSelect} = props;

    useEffect(() => {
        console.log('CountryList useeffect');
        (async () => {
            try {
                const countryData = await import('../countries.json');
                const options = countryData.default.map((element) => ({
                    value: element.name.toLowerCase(),
                    label: element.name,
                }));

                setCountryOptions(options);
            } catch (e) {
                console.error(e);
            }
        })()
    }, []);

    const handleCountryChange = (selectedOption) => {
        console.log('handleCountryChange');

        setSelectedCountry(selectedOption);
    };

    return (
        <form className="countryList" onSubmit={(event) => onSelect(event, selectedCountry)}>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={countryOptions[0]}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name="country"
                options={countryOptions}
                onChange={handleCountryChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default CountryList;

CountryList.propTypes = {
    onSelect: PropTypes.func.isRequired
};

CountryList.defaultProps = {
    onSelect: () => {
    }
};