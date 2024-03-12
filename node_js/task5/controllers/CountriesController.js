import Countries from "../models/Countries.js";
import _ from 'lodash';
import axios from "axios";

class CountriesController{

    static async countryList(req, res, next){
        try {
            const { page = 1 } = req.query;
            const limit = 10;
            const {countries, total} = await Countries.countryList(page, +limit);

            res.json({
                countries,
                total,
                totalPages: Math.ceil(total / limit),
            })

        }catch (e){
            next(e)
        }
    }

    static async getRegions(req, res, next){
        try{
            const {country_id} = req.params;

            const regions = await Countries.getRegions(country_id);

            res.json({
                regions
            })
        }catch (e){
            next(e);
        }
    }

    static async getCities(req, res, next){
        try{
            const {region_id} = req.params;

            const cities = await Countries.getCities(region_id);

            res.json({
                cities
            })
        }catch (e){
            next(e);
        }
    }

    static async getCityWeather(req, res, next){
        try{
            const {id} = req.params;

            const city = await Countries.getCity(id);

            if (_.isEmpty(city)) {
                return res.status(404).json({error: 'City not found'});
            }

            const {latitude, longitude} = city[0];
            const {OPEN_WEATHER_API_KEY} = process.env;

            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`)

            res.json({
                city,
                weatherData: data
            })
        }catch (e){
            next(e);
        }
    }
}

export default CountriesController;