import { Router } from "express";
import MessagesController from "../controllers/MessagesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";


const router = new Router();

router.post(
  '/send',
  authMiddleware,
  MessagesController.create,
)

router.get(
  '/list/:friendId',
  authMiddleware,
  MessagesController.list,
)

export default router;
