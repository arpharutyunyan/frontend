import {Router} from "express";
import PeopleController from "../controllers/PeopleController.js";
import validate from "../middlewares/validate.js";
import peopleSchema from "../middlewares/schema/peopleSchema.js";

const router = Router();


router.post(
    '/auth',
    validate(peopleSchema.auth),
    PeopleController.auth
)

router.post('/create', validate(peopleSchema.create), PeopleController.create);
router.get('/single/:id', PeopleController.show);
router.put('/update/:id', validate(peopleSchema.create), PeopleController.update);
router.delete('/delete/:id', PeopleController.delete);



export default router;
