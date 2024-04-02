import { DataTypes, Model } from "sequelize";
import md5 from "md5";
import sequelize from "../services/sequelize.js";

const { PASSWORD_SECRET } = process.env

class Users extends Model {

  static passwordHash = (pass) => md5(md5(pass) + PASSWORD_SECRET)
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
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.CHAR(32),
    allowNull: false,
    set(value) {
      if (value) {
        this.setDataValue('password', Users.passwordHash(value))
      }
    },
    get() {
      return undefined
    }
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  }
}, {
  sequelize,
  modelName: 'users',
  tableName: 'users',
  indexes: [{
    fields: ['email'], unique: true
  }]
})

export default Users
