const path = require("path");
const fs = require("fs");
const md5 = require("md5");
const Users = require("../models/Users");


class UsersController {
  static login(req, res, next) {
    const { password, email } = req.body;
    const user = Users.get(email);

    if (!user || user.password !== md5(md5(password) + '34erdtfygvhjb')) {
      res.status(403);
      res.json({
        status: 'error',
        message: 'Invalid email or password'
      });
      return;
    }
    delete user.password;
    res.json({
      user,
      status: 'ok'
    })
  }

  static register(req, res, next) {
    const { firstName, lastName, password, email } = req.body;

    const exists = Users.get(email);

    if (exists) {
      res.status(422);
      res.json({
        status: 'error',
        message: 'already exists'
      })
    }

    const user = Users.create({
      firstName, lastName, password, email
    })
    res.json({
      status: "ok",
      user
    })
  }

  static list(req, res, next) {
    const { page = 1 } = req.query;
    const limit = 2;
    const { total, users } = Users.list(page, limit);

    res.json({
      users,
      total,
      totalPages: Math.ceil(total / limit),
    })
  }

  static update(req, res, next) {
    const { lastName, firstName, email } = req.body;
    const exists = Users.get(email);

    if (!exists) {
      res.status(404);
      res.json({
        status: 'error',
      })
    }

    const user = Users.update(email, { lastName, firstName })


    res.json({
      total: 3,
      user
    })
  }

  static delete(req, res, next) {
    const { page = 1 } = req.query;
    const limit = 3;
    res.json({
      total: 3,
      totalPage: 1,
      users: [],
    })
  }
}

module.exports = UsersController
