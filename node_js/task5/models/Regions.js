import {DataTypes, Model} from "sequelize";
import sequelize from "../services/db.js";

class Regions extends Model{}

Regions.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'regions',
    tableName: 'regions',
    timestamps: false,
});

export default Regions;