import { Router } from "express";
import PeopleController from "../controllers/PeopleController.js";

const router = Router();


router.post('/auth', PeopleController.auth)


export default router;
