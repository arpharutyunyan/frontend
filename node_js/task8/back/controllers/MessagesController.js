import { Messages, Users } from "../models/index.js";
import { Op } from "sequelize";
import HttpErrors from "http-errors";
import Socket from "../services/Socket.js";


class MessagesController {
  static async create(req, res, next) {
    try {
      const { userId } = req;
      const { friendId, text, type = 'text' } = req.body;

      const message = await Messages.create({
        from: userId,
        to: friendId,
        text,
        type
      });

      Socket.emit(`user_${friendId}`, 'new-message', message)

      res.json({
        message
      })
    } catch (e) {
      next(e)
    }
  }

  static async list(req, res, next) {
    try {
      const { userId } = req;
      const { friendId } = req.params;
      const { page = 1 } = req.query;
      const limit = 50;

      const where = {
        [Op.or]: [
          { from: userId, to: friendId },
          { from: friendId, to: userId },
        ]
      }
      const messages = await Messages.findAll({
        where,
        order: [['createdAt', 'desc']],
        limit,
        offset: (page - 1) * limit
      });

      const total = await Messages.count({
        where
      })

      res.json({
        messages,
        total,
        totalPages: Math.ceil(total / limit)
      })
    } catch (e) {
      next(e)
    }
  }

  static async open(req, res, next) {
    try {
      const { userId } = req;
      const { id } = req.params;

      const message = await Messages.findOne({
        where: {
          id,
          to: userId
        },
      });
      if (!message) {
        throw HttpErrors(404);
      }
      await message.update({
        seen: new Date()
      })
      res.json({
        message
      })
    } catch (e) {
      next(e)
    }
  }
}

export default MessagesController
