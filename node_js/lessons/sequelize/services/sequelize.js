import { Op, Sequelize } from "sequelize";

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const operatorsAliases = {
  $like: Op.like,
  $in: Op.in,
  $or: Op.or,
  $and: Op.and,
  $lte: Op.lte,
  $gte: Op.gte,
  $gt: Op.gt,
  $lt: Op.lt,
}

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql',
  // operatorsAliases
});

export default sequelize
