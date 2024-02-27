const { Router } = require('express');
const UsersController = require("../controllers/UsersController");

const router = new Router();

router.post('/register', UsersController.register)

router.post('/login', UsersController.login)

router.get('/list', UsersController.list)

router.put('/update/:id', UsersController.update);

router.delete('/delete/:id', UsersController.delete)


module.exports = router;
