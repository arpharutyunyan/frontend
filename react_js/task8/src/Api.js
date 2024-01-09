import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.tomorrow.io'
});

class Api {
    static getTemperature = (country) => {
        console.log('getTemperature')
        return api.get('/v4/weather/history/recent', {
            params: {
                location: country,
                apikey: 'hJVaIcnJiIOOJW0dTeLBjyy32k0W4pgu',
            }
        })
    }
}

export default Api;