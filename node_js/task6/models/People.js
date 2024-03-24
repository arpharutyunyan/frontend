import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db.js";

class People extends Model {

}

People.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passport: {
    type: DataTypes.CHAR(9),
    allowNull: true,
    unique: 'passport'
  },
  idCard: {
    type: DataTypes.CHAR(12),
    allowNull: true,
    unique: 'idCard'
  },
  voted: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'people',
  tableName: 'people',
  // indexes: [{
  //   fields: ['passport'], unique: true
  // }, {
  //   fields: ['idCard'], unique: true
  // }]
})

export default People;
