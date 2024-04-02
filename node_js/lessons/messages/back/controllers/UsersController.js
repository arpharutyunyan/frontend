import { Users } from "../models/index.js";
import HttpErrors from "http-errors";

class UsersController {
  static async register(req, res, next) {
    try {
      const { firstName, lastName, password, email } = req.body;
      const exists = await Users.findOne({
        where: { email }
      });
      if (exists) {
        throw HttpErrors(422, {
          errors: {
            email: "Already exists"
          }
        })
      }
      const user = await Users.create({
        firstName, lastName, password, email
      })
      res.json({
        status: 'ok',
        user
      })
    } catch (e) {
      next(e)
    }
  }

  static async login(req, res, next) {
    try {
      const { firstName, lastName, password, email } = req.body;
      const exists = await Users.findOne({
        where: { email }
      });
      if (exists) {
        throw HttpErrors(422, {
          errors: {
            email: "Already exists"
          }
        })
      }
      const user = await Users.create({
        firstName, lastName, password, email
      })
      res.json({
        status: 'ok',
        user
      })
    } catch (e) {
      next(e)
    }
  }

  static async profile(req, res, next) {
    try {
      const { userId } = req;

    } catch (e) {
      next(e)
    }
  }

  static async single(req, res, next) {
    try {
      const { userId } = req.params;

    } catch (e) {
      next(e)
    }
  }

  static async list(req, res, next) {
    try {
      const { userId } = req;

    } catch (e) {
      next(e)
    }
  }
}

export default UsersController
