import axios from "axios";

class Api {
    static getCountryData = () => {
        console.log('getCountryData');
        return axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json');
    }

    static getCurrency = (from, to) => {
        console.log('getCurrency');
        return axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`);
    }
}

export default Api;