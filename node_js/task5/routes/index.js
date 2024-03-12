import {Router} from "express";
import CountriesController from "../controllers/CountriesController.js";


const router = new Router();

router.get('/countries', CountriesController.countryList );
router.get('/countries/:country_id/regions', CountriesController.getRegions );
router.get('/countries/:region_id/cities', CountriesController.getCities );
router.get('/cities/:id/weather', CountriesController.getCityWeather );


export default router;