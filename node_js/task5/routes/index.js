import {Router} from "express";
import CountriesController from "../controllers/CountriesController.js";
import RegionsController from "../controllers/RegionsController.js";
import CitiesController from "../controllers/CitiesController.js";


const router = new Router();

router.get('/countries', CountriesController.countryList );
router.get('/countries/:country_id/regions', RegionsController.getRegions );
router.get('/countries/:region_id/cities', CitiesController.getCities );
router.get('/cities/:id/weather', CitiesController.getCityWeather );


export default router;