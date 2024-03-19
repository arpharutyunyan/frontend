import Countries from "../models/Countries.js";

class CountriesController {

    static async countryList(req, res, next) {
        try {
            const {page = 1} = req.query;
            const limit = 3;
            const countries = await Countries.findAll({
                limit,
                offset: (page - 1) * limit,
            });
            const total = await Countries.count();

            res.json({
                countries,
                total,
                totalPages: Math.ceil(total / limit),
            })

        } catch (e) {
            next(e)
        }
    }
}

export default CountriesController;