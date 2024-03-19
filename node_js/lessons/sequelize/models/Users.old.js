import md5 from "md5";
import db from "../services/db.js";

const { PASSWORD_SECRET } = process.env;

class Users {

  static async getByEmail(email) {
    const [data] = await db.execute('SELECT id, firstName, lastName, email, debts FROM users where email = ? LIMIT 1', [email])

    return data[0];
  }

  static passwordHash(password) {
    return md5(md5(password) + PASSWORD_SECRET);
  }

  static async auth(email, password) {
    const [data] = await db.execute('SELECT id, firstName, lastName, email, debts FROM users where email = ? AND password = ?', [
      email, this.passwordHash(password)
    ])

    return data[0];
  }

  static async get(id) {
    const [data] = await db.execute('SELECT id, firstName, lastName, email, debts FROM users where id = ?', [id])

    return data[0];
  }

  static async create(params = {}) {
    const { firstName, lastName, debts = 0, password, email } = params;
    const [data] = await db.execute('INSERT into users(firstName, lastName, email, debts, password) values(?,?,?,?,?)', [
      firstName, lastName, email, debts, this.passwordHash(password)
    ]);

    return this.get(data.insertId);
  }

  static async update(userId, params) {
    const { firstName, lastName, } = params;
    await db.execute('UPDATE users SET firstName = ?, firstName = ? where id = ?', [
      firstName, lastName, userId
    ]);
    return this.get(userId);
  }

  static async list(page = 1, limit = 3) {
    const offset = (page - 1) * limit;
    const [data] = await db.query('SELECT id, firstName, lastName, email, debts FROM users limit ? offset ?', [
      limit, offset
    ])
    return data
  }

  static async total() {
    const [data] = await db.query('SELECT count(*) as total FROM users');
    return data[0].total
  }
}

export default Users;
