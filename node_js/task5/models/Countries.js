// import db from "../services/db.js";

import {DataTypes, Model} from "sequelize";
import sequelize from "../services/db.js";

class Countries extends Model{
    // static async countryList(page, limit){
    //     const offset = (page - 1) * limit;
    //     const [countries] = await db.query('SELECT * FROM countries LIMIT ? OFFSET ?', [
    //         limit, offset
    //     ]);
    //
    //     const [total] = await db.execute('SELECT count(*) as total FROM countries');
    //     return { countries, total: total[0].total };
    // }
    //
    // static async getRegions(country_id){
    //     const [regions] = await db.execute('SELECT * FROM regions WHERE country_id=?', [country_id]);
    //     return regions;
    // }
    //
    // static async getCities(region_id){
    //     const [cities] = await db.execute('SELECT * FROM cities WHERE region_id=?', [region_id]);
    //     return cities;
    // }
    //
    // static async getCity(id){
    //     const [city] = await db.execute('SELECT * FROM cities WHERE id=?', [id]);
    //     return city;
    // }
}

Countries.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'countries',
    tableName: 'countries',
    timestamps: false,
});

export default Countries;