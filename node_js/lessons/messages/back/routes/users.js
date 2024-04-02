import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
import validate from "../middlewares/validate.js";
import usersSchema from "../middlewares/schema/usersSchema.js";


const router = new Router();

router.post(
  '/register',
  validate(usersSchema.register),
  UsersController.register,
)

export default router;
