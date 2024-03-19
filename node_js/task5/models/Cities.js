import {DataTypes, Model} from "sequelize";
import sequelize from "../services/db.js";

class Cities extends Model{}

Cities.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    region_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    country_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    longitude: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'cities',
    tableName: 'cities',
    timestamps: false,
});

export default Cities;