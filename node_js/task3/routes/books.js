const {Router} = require('express');
const BooksController = require("../controllers/BooksController");

const router = new Router();


router.get('/', BooksController.index);
router.post('/create', BooksController.create);
router.get('/show/:id', BooksController.show);
router.put('/update/:id', BooksController.update);
router.delete('/delete/:id', BooksController.delete);

module.exports = router;