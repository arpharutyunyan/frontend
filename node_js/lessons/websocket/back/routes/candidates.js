import { Router } from "express";
import CandidatesController from "../controllers/CandidatesController.js";
import validate from "../middlewares/validate.js";
import candidateSchema from "../middlewares/schema/candidateSchema.js";
import PeopleController from "../controllers/PeopleController.js";
import CandidateSchema from "../middlewares/schema/candidateSchema.js";

const router = Router();


router.get(
  '/',
  validate(candidateSchema.list),
  CandidatesController.list
)

router.post('/create', validate(candidateSchema.create), CandidatesController.create);
router.get('/single/:id', CandidatesController.show);
router.put('/update/:id', validate(candidateSchema.update), CandidatesController.update);
router.delete('/delete/:id', CandidatesController.delete);

router.put('/vote', validate(candidateSchema.vote), CandidatesController.vote)

export default router;
