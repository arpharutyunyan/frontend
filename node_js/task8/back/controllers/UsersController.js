import {Messages, Users} from "../models/index.js";
import HttpErrors from "http-errors";
import jwt from "jsonwebtoken";
import sequelize from "../services/sequelize.js";
import {Op, QueryTypes} from "sequelize";

const {JWT_SECRET} = process.env;

class UsersController {
    static async register(req, res, next) {
        try {
            const {firstName, lastName, password, email} = req.body;
            const exists = await Users.findOne({
                where: {email}
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
            const {email, password} = req.body;
            const hashedPassword = Users.passwordHash(password);

            const user = await Users.findOne({
                where: {email}
            });

            if (!user || hashedPassword !== user.getDataValue('password')) {
                throw HttpErrors(403, {
                    errors: {
                        email: "Invalid email or password"
                    }
                })
            }

            const token = jwt.sign({
                userId: user.id,
            }, JWT_SECRET,);

            res.cookie('token', token, {
                httpOnly: true
            });

            res.json({
                status: 'ok',
                user,
                token
            })
        } catch (e) {
            next(e)
        }
    }

    static async profile(req, res, next) {
        try {
            const {userId} = req;
            console.log(userId);

            const user = await Users.findOne({
                where: {
                    id: userId
                }
            })

            if (!user) {
                throw HttpErrors(404, "User not found");
            }

            res.json({
                status: 'ok',
                user,
            })
        } catch (e) {
            next(e)
        }
    }

    static async single(req, res, next) {
        try {
            const {userId} = req.params;

            const user = await Users.findOne({
                where: {
                    id: userId
                }
            })

            if (!user) {
                throw HttpErrors(404, "User not found");
            }

            res.json({
                status: 'ok',
                user,
            })
        } catch (e) {
            next(e)
        }
    }

    static async list(req, res, next) {
        try {
            const {userId} = req;
            // const sql = `
            //   SELECT userId FROM (
            //       SELECT m.from AS from_user, m.to AS to_user, u.id AS userId
            //       FROM messages AS m
            //       JOIN users AS u ON u.id = m.from OR u.id = m.to
            //   ) AS subquery
            //   WHERE subquery.from_user = :userId OR subquery.to_user = :userId
            //   GROUP BY userId
            //   LIMIT 20;
            // `;
            //
            // const [results] = await sequelize.query(sql, {
            //     replacements: { userId },
            //     type: QueryTypes.SELECT
            // });

            const userMessages = await Messages.findAll({
                where: {
                    [Op.or]: [{from: userId}, {to: userId}],
                },
                attributes: ['from', 'to'],
            });

            const uniqueUserIds = new Set();
            userMessages.forEach(message => {
                if (message.from !== userId) {
                    uniqueUserIds.add(message.from);
                }
                if (message.to !== userId) {
                    uniqueUserIds.add(message.to);
                }
                // self message case
                if (message.to === userId && message.from === userId) {
                    uniqueUserIds.add(userId);
                }

            });

            const users = await Users.findAll({
                where: {
                    id: {
                        [Op.in]: [...uniqueUserIds],
                    },
                },
            });

            res.json({
                status: 'ok',
                users,
            })
        } catch (e) {
            next(e)
        }
    }
}

export default UsersController
