import _ from "lodash";

import Users from "../models/Users.js";

import jwt from "jsonwebtoken";

import HttpError from "http-errors";

const { JWT_SECRET } = process.env;


class UsersController {
  static async login(req, res, next) {
    try {
      const { password, email } = req.body;
      const user = await Users.getByEmail(email);

      if (!user) {
        throw HttpError(403, 'Invalid email or password')
      }

      // res.cookie('email', user.email);
      // req.session.email = user.email;
      console.log(user)
      const token = jwt.sign({
        userId: user.id,
      }, JWT_SECRET, {
        // expiresIn: '10y',
        // expiredAt: new Date('2024-01-01').getTime()
      })
      res.cookie('token', token, {
        httpOnly: true
      });

      res.json({
        user,
        status: 'ok',
        token
      })
    } catch (e) {
      next(e);
    }
  }

  static async profile(req, res, next) {
    try {
      const { userId } = req;
      const user = await Users.get(userId);
      res.json({
        user,
        status: 'ok'
      })
    } catch (e) {
      next(e);
    }
  }

  static async register(req, res, next) {
    try {
      const { firstName, lastName, password, email } = req.body;

      const errors = {};
      if (!firstName) {
        errors.firstName = 'required'
      }
      if (!lastName) {
        errors.lastName = 'required'
      }
      if (!password) {
        errors.password = 'required'
      }
      if (!email) {
        errors.email = 'required'
      } else if (await Users.getByEmail(email)) {
        errors.email = 'already exists'
      }


      if (!_.isEmpty(errors)) {
        throw HttpError(409, {
          errors
        })
      }

      const user = await Users.create({
        firstName, lastName, password, email
      })
      res.json({
        status: "ok",
        user
      })
    } catch (e) {
      next(e);
    }
  }

  static async list(req, res, next) {
    try {
      const { page = 1 } = req.query;
      const limit = 2;
      const users = await Users.list(page, +limit);
      const total = await Users.total();

      res.json({
        users,
        total,
        totalPages: Math.ceil(total / limit),
      })
    } catch (e) {
      next(e)
    }
  }

  static async update(req, res, next) {
    const { userId } = req;
    const { lastName, firstName } = req.body;
    const exists = Users.get(userId);

    if (!exists) {
      throw HttpError(404)
    }

    const user = await Users.update(userId, { lastName, firstName })

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

export default UsersController
