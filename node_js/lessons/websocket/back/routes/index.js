import { Router } from "express";
import candidates from "./candidates.js";
import people from "./people.js";

const router = Router();

router.use('/candidates', candidates)

router.use('/people', people)

export default router;
