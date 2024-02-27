const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const md5 = require("md5");

class Users {

  static getFilePath(email) {
    const usersDir = path.join(__dirname, '../data/users');
    return path.join(usersDir, email + '.json');
  }

  static get(email) {
    const userFile = this.getFilePath(email);

    if (!fs.existsSync(userFile)) {
      return null;
    }
    return JSON.parse(fs.readFileSync(userFile, 'utf8'));
  }

  static create(params = {}) {
    const { password, email } = params;

    const userFile = this.getFilePath(email);

    fs.writeFileSync(userFile, JSON.stringify({
      ...params, password: md5(md5(password) + '34erdtfygvhjb'),
    }));
    return params;
  }

  static update(email, params) {
    const userFile = this.getFilePath(email);

    let user = this.get(email);

    user = { ...user, ...params };

    fs.writeFileSync(userFile, JSON.stringify(user));


    return user;
  }

  static list(page = 1, limit = 3) {
    const usersDir = path.join(__dirname, '../data/users');

    let files = fs.readdirSync(usersDir);

    const dataChunk = _.chunk(files, limit)[page - 1] || [];

    const users = dataChunk.map((file) => {
      try {
        const user = JSON.parse(fs.readFileSync(path.join(usersDir, file), 'utf8'));
        return user;
      } catch (e) {
        return {}
      }
    })

    return {
      users,
      total: files.length
    };
  }
}

module.exports = Users;
