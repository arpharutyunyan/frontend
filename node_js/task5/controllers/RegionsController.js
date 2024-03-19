import _ from 'lodash';
import HttpError from "http-errors";
import Regions from "../models/Regions.js";

class RegionsController {

    static async getRegions(req, res, next) {
        try {
            const {country_id} = req.params;

            const regions = await Regions.findAll({
                where: {
                    country_id
                }
            });

            if (_.isEmpty(regions)) {
                throw HttpError(404);
            }

            res.json({
                regions
            })
        } catch (e) {
            next(e);
        }
    }
}

export default RegionsController;