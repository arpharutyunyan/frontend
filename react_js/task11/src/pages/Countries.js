import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Select from "react-select";

function Countries(props) {
    const [countryList, setCountryList] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const navigate = useNavigate();
    const {country} = useParams();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://raw.githubusercontent.com/anahitGhost/share/main/country.json');
                setCountryList(data.length ? data[1] : null);
            } catch (e) {
                console.error(e);
            }
        })()
    }, []);

    // useEffect(() => {
    //   if(countryList && country){
    //       const selectedCountryData = countryList.filter(c=> c.iso2Code === country);
    //       setSelectedCountry(selectedCountryData.length ? selectedCountryData[0] : null);
    //   }
    // }, [countryList, country]);

    const handleSelectChange = useCallback((country) => {
        const iso = country.iso2Code;
        navigate(`/countries/${iso}`)
    }, [navigate]);

    return (
        <div className='countries'>
            <div className="countrySelect">
                {
                    countryList ?
                        <Select
                            isDisabled={false}
                            isClearable={true}
                            isSearchable={true}
                            defaultValue={countryList.find((c) => c.iso2Code === country)}
                            getOptionLabel={o => o.name}
                            getOptionValue={o => o.iso2Code}
                            options={countryList}
                            onChange={handleSelectChange}
                        />
                        : null
                }
            </div>
            {
                country ?
                    <img src={`../assets/images/flags/${country.toLowerCase()}.svg`} alt="flag"
                         style={{width: "300px", objectFit: 'cover', marginTop: "10px"}}/> : null
            }
        </div>
    );
}

export default Countries;