import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db.js";

class Parties extends Model {

}

Parties.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'parties',
  tableName: 'parties',
})

export default Parties;
