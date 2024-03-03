const {Router} = require('express');
const BooksController = require("../controllers/BooksController");

const router = new Router();


router.get('/', BooksController.index);
router.get('/create', BooksController.create);
router.post('/create', BooksController.store);
router.get('/show/:id', BooksController.show);
router.get('/update/:id', BooksController.edit);
router.put('/update/:id', BooksController.update);
router.delete('/delete/:id', BooksController.delete);

module.exports = router;