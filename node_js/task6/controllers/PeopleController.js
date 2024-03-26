import {People} from "../models/index.js";
import jwt from "jsonwebtoken";
import HttpErrors from "http-errors";
import _ from "lodash";
import Joi from "joi";
import {Op} from "sequelize";

const {ELECTION_SECRET} = process.env

class PeopleController {

    static async auth(req, res, next) {
        try {
            const {passport, idCard, passportOrIdCard} = req.body;
            const where = {};
            if (passport) {
                where.passport = passport;
            } else if (idCard) {
                where.idCard = idCard;
            } else {
                where[Op.or] = [
                    {passport: passportOrIdCard},
                    {idCard: passportOrIdCard},
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
            const token = jwt.sign({personId: person.id}, ELECTION_SECRET, {
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

    static async create(req, res, next) {
        try {
            const {firstName, lastName, passport, idCard} = req.body;
            const data = await People.create(req.body);
            const person = await People.findOne({
                where: {
                    id: data.id,
                }
            })

            res.json({
                person
            })
        } catch (e) {
            next(e);
        }
    }

    static async show(req, res, next) {
        try {
            const {id} = req.params;
            const person = await People.findOne({
                where: {
                    id: id,
                }
            })

            if (_.isEmpty(person)) {
                throw HttpErrors(404);
            }

            res.json({
                person
            })
        } catch (e) {
            next(e);
        }
    }

    static async update(req, res, next) {
        try {
            const {id} = req.params;
            const person = await People.findOne({
                where: {
                    id: id,
                }
            })

            if (_.isEmpty(person)) {
                throw HttpErrors(404);
            }

            await person.update({...req.body})

            res.json({
                person
            })
        } catch (e) {
            next(e);
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const person = await People.findOne({
                where: {
                    id: id,
                }
            })

            if (_.isEmpty(person)) {
                throw HttpErrors(404);
            }

            await person.destroy({
                where: {
                    id: id,
                }
            })

            res.json({
                message: 'success'
            })
        } catch (e) {
            next(e);
        }
    }
}

export default PeopleController;
