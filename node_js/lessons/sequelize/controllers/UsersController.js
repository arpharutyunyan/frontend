import _ from "lodash";

import Users from "../models/Users.js";

import jwt from "jsonwebtoken";

import HttpError from "http-errors";
import { col, fn, literal, Op, Sequelize } from "sequelize";

const { JWT_SECRET } = process.env;


class UsersController {
  static async login(req, res, next) {
    try {
      const { password, email } = req.body;
      const user = await Users.findOne({
        where: { email, password }
      });

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
      } else {
        const exists = await Users.findOne({
          where: { email }
        })
        if (exists) {
          errors.email = 'already exists'
        }
      }


      if (!_.isEmpty(errors)) {
        throw HttpError(409, {
          errors
        })
      }

      const user = await Users.create({
        firstName, lastName, password, email
      });

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
      const { page = 1, limit = 20 } = req.query;
      const { lastName } = req.body;
      const users = await Users.findAll({
        where: {
          // 'CONCAT(firstName, " ", lastName)': 'Armen Poxosyan',
          name: Sequelize.where(literal('CONCAT(firstName, " ", lastName)'), {
            [Op.like]: 'Armen Poxosyan'
          }),
          // [Op.and]: [
          //   { firstName: { [Op.like]: '%a%' } },
          //   { firstName: { [Op.like]: '%p%' } },
          // ],
          // [Op.or]: [
          //   {
          //     lastName: 'Poxosyan',
          //     firstName: 'Armen',
          //   },
          //   { lastName: 'Test', firstName: 'Test' },
          // ]
        },
        attributes: {
          include: [
            [literal('CONCAT(firstName, " ", lastName)'), 'name'],
            [fn('concat', col('firstName'), ' ', col('lastName')), 'name233']
          ],
        },
        limit,
        offset: (page - 1) * limit,
        // order: [['firstName', 'desc'], ['lastName', 'desc']],
      });

      const total = await Users.count();
      res.json({
        user: users[10],
        users,
        total,
        totalPages: Math.ceil(total / limit),
      })
    } catch (e) {
      next(e)
    }
  }

  static async update(req, res, next) {
    try {
      const { userId } = req;
      const { lastName, firstName } = req.body;
      // const user = Users.findOne({
      //   where: {
      //     id: userId
      //   }
      // });
      let user = await Users.findByPk(userId);

      if (!user) {
        throw HttpError(404)
      }

      await user.update({
        lastName,
        firstName
      });

      // await user.destroy();

      await Users.destroy({
        where: { id: 1 }
      })

      // await Users.update({
      //   lastName,
      //   firstName
      // }, {
      //   where: {
      //     id: userId
      //   }
      // });
      //
      // user.lastName = lastName;
      // user.firstName = firstName;

      // await user.save();
      res.json({
        total: 3,
        user
      })
    } catch (e) {
      next(e);
    }
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
