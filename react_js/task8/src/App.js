import './assets/css/style.css';
import {useCallback, useState} from "react";
import Loading from "./components/Loading";
import CountryList from "./components/CountryList";
import Temperature from "./components/Temperature";
import Api from "./Api";

function App() {
    const [loading, setLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [temperatureData, setTemperatureData] = useState({});

    const getTemperatureData = useCallback(async (country) => {
        setLoading(true);
        try {
            console.log('Temperature useEffect');
            const response = await Api.getTemperature(country);

            const {
                temperatureAvg,
                temperatureMax,
                temperatureMin,
            } = response.data.timelines.daily[1].values;

            setTemperatureData({
                now: temperatureAvg,
                max: temperatureMax,
                min: temperatureMin,
            });
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }, []);

    const selectedCountryHandle = useCallback((event, selectedCountry) => {
        console.log('selectedCountryHandle');

        event.preventDefault();
        setSelectedCountry(selectedCountry.value);
        getTemperatureData(selectedCountry.value);
    }, [getTemperatureData]);

    return (
        <div className="app">
            {
                loading ? <Loading/> : null
            }

            <CountryList onSelect={selectedCountryHandle}/>

            {
                selectedCountry ? <Temperature temperatureData={temperatureData}/>
                    : null
            }

        </div>
    );
}

export default App;
