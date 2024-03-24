import { People } from "../models/index.js";
import jwt from "jsonwebtoken";
import HttpErrors from "http-errors";
import { Op } from "sequelize";

const { ELECTION_SECRET } = process.env

class PeopleController {

  static async auth(req, res, next) {
    try {
      const { passport, idCard, passportOrIdCard } = req.body;
      const where = {};
      if (passport) {
        where.passport = passport;
      } else if (idCard) {
        where.idCard = idCard;
      } else {
        where[Op.or] = [
          { passport: passportOrIdCard },
          { idCard: passportOrIdCard },
        ]
      }
      const person = await People.findOne({
        where
      });
      if (!person) {
        throw HttpErrors(404);
      }
      if (person.voted) {
        throw HttpErrors(403, 'You are already voted');
      }
      const token = jwt.sign({ personId: person.id }, ELECTION_SECRET, {
        expiresIn: '15m'
      })
      res.json({
        person,
        token
      })
    } catch (e) {
      next(e);
    }
  }
}

export default PeopleController;
