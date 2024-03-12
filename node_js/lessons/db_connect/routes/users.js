import { Router } from "express";

import UsersController from "../controllers/UsersController.js";


const router = new Router();

router.post('/register', UsersController.register)
router.post('/login', UsersController.login)


router.get('/profile', UsersController.profile)


router.get('/list', UsersController.list)

router.put('/update',UsersController.update);

router.delete('/delete/:id',UsersController.delete)


export default router;
