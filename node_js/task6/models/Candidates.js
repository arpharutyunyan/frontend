import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db.js";
import People from "./People.js";
import Parties from "./Parties.js";

class Candidates extends Model {

}

Candidates.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  votes: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'candidates',
  tableName: 'candidates',
})

Candidates.belongsTo(People, {
  foreignKey: 'personId',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'person'
});

People.hasOne(Candidates, {
  foreignKey: 'personId',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'candidate'
});

Candidates.belongsTo(Parties, {
  foreignKey: 'partyId',
  onDelete: 'cascade',
  onUpdate: 'cascade',
  as: 'party'
});

export default Candidates;
