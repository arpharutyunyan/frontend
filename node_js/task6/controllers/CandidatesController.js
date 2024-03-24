import {Candidates, Parties, People} from "../models/index.js";
import jwt from "jsonwebtoken";
import {Sequelize} from "sequelize";
import HttpErrors from "http-errors";

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
