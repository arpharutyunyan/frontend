import { Router } from "express";
import CandidatesController from "../controllers/CandidatesController.js";

const router = Router();


router.get('/', CandidatesController.list)

router.put('/vote', CandidatesController.vote)

export default router;
