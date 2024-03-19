import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize.js";
import md5 from "md5";

const { PASSWORD_SECRET } = process.env;


class Users extends Model {
  static passwordHash(password) {
    return md5(md5(password) + PASSWORD_SECRET);
  }
}

Users.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  debts: {
    type: DataTypes.FLOAT(10, 2),
    defaultValue: 0,
  },
  password: {
    type: DataTypes.CHAR(32),
    set(value) {
      if (value) {
        this.setDataValue('password', Users.passwordHash(value))
      }
    },
    get() {
      return undefined;
    }
  },
}, {
  sequelize,
  modelName: 'users',
  tableName: 'users',
  timestamps: false,
  indexes: [
    { fields: ['email'], unique: true }
  ]
})

// Users.sync({ alter: true });

export default Users;
