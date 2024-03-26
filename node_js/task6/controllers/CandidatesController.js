import {Candidates, Parties, People} from "../models/index.js";
import jwt from "jsonwebtoken";
import {Sequelize} from "sequelize";
import HttpErrors from "http-errors";
import _ from "lodash";

const {ELECTION_SECRET} = process.env

class CandidatesController {

    static async list(req, res, next) {
        try {
            const candidates = await Candidates.findAll({
                include: [{
                    model: People,
                    as: 'person',
                    required: true
                }, {
                    model: Parties,
                    as: 'party',
                    required: false
                }]
            });
            res.json({
                candidates
            })
        } catch (e) {
            next(e)
        }
    }

    static async create(req, res, next) {
        try {
            const {firstName, lastName, passport, idCard} = req.body;
            const data = await Candidates.create(req.body);
            const candidate = await Candidates.findOne({
                where: {
                    id: data.id,
                }
            })

            res.json({
                candidate
            })
        } catch (e) {
            next(e);
        }
    }

    static async show(req, res, next) {
        try {
            const {id} = req.params;
            const candidate = await Candidates.findOne({
                where: {
                    id: id,
                }
            })

            if (_.isEmpty(candidate)) {
                throw HttpErrors(404);
            }

            res.json({
                candidate
            })
        } catch (e) {
            next(e);
        }
    }

    static async update(req, res, next) {
        try {
            const {id} = req.params;
            const candidate = await Candidates.findOne({
                where: {
                    id: id,
                }
            })

            if (_.isEmpty(candidate)) {
                throw HttpErrors(404);
            }

            await candidate.update({...req.body})

            res.json({
                candidate
            })
        } catch (e) {
            next(e);
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params;
            const candidate = await Candidates.findOne({
                where: {
                    id: id,
                }
            })

            if (_.isEmpty(candidate)) {
                throw HttpErrors(404);
            }

            await candidate.destroy({
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

    static async vote(req, res, next) {
        try {
            const {candidateId, token} = req.body;

            const {personId} = jwt.verify(token, ELECTION_SECRET);

            const person = await People.findOne({
                where: {
                    id: personId
                }
            });

            if (person.voted) {
                throw HttpErrors(403);
            }

            const candidate = await Candidates.findOne({
                where: {
                    id: candidateId
                }
            });
            if (!candidate) {
                throw HttpErrors(404);
            }


            await person.update({
                voted: new Date()
            });


            await candidate.update({
                votes: candidate.votes + 1
            })


            res.json({
                status: 'ok'
            })

        } catch (e) {
            next(e)
        }
    }
}

export default CandidatesController;
