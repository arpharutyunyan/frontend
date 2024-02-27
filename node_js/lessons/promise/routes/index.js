const { Router } = require('express');

const books = require("./books");
const users = require("./users");

const router = new Router();

router.use('/books', books);

router.use('/users', users);

module.exports = router;
