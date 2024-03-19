import _ from 'lodash';
import HttpError from "http-errors";
import axios from "axios";
import Cities from "../models/Cities.js";

class CitiesController {

    static async getCities(req, res, next) {
        try {
            const {region_id} = req.params;

            const cities = await Cities.findAll({
                where:{
                    region_id
                }
            });

            if (_.isEmpty(cities)) {
                throw HttpError(404);
            }

            res.json({
                cities
            })
        } catch (e) {
            next(e);
        }
    }

    static async getCityWeather(req, res, next) {
        try {
            const {id} = req.params;

            const city = await Cities.findByPk(id);

            if (!city) {
                throw HttpError(404, 'City not found');
            }
            const {latitude, longitude} = city;
            const {OPEN_WEATHER_API_KEY} = process.env;

            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`)

            res.json({
                city,
                weatherData: data
            })
        } catch (e) {
            next(e);
        }
    }
}

export default CitiesController;