const Books = require("../models/Books");
const _ = require("lodash");

class BooksController {

    static index(req, res, next) {
        try {
            const {page = 1, created, deleted} = req.query;
            const pageItemsSize = 3;

            const {total, books} = Books.getBooksList(page, pageItemsSize);

            res.render('books/index', {
                books,
                total: total,
                totalPages: Math.ceil(total / pageItemsSize),
                created,
                deleted,
                currentPage: +page,
            })
        } catch (e) {
            next(e);
        }
    }

    static async create(req, res, next) {
        try {
            res.render('books/create', { errors: {}, data: {} })
        } catch (e) {
            next(e);
        }
    }

    static store(req, res, next) {
        try {
            const {title, auth, published_date} = req.body;

            const book = Books.create({title, auth, published_date});

            res.redirect(`/books/show/${book.id}`);
        }catch (e){
            next(e);
        }
    }

    static show(req, res, next) {
        try {
            const {id} = req.params;

            const book = Books.getBook(id);

            if (!book) {
                res.sendStatus(404);
                return;
            }

            res.render(`books/show`, {
                book
            })
        } catch (e) {
            next(e);
        }
    }

    static async edit(req, res, next) {
        try {
            const {id} = req.params;

            const book = Books.getBook(id);

            if (!book) {
                res.sendStatus(404);
                return;
            }

            res.render('books/update', {errors: {}, data: {...book}})
        } catch (e) {
            next(e);
        }
    }

    static update(req, res, next) {
        try {
            const {id} = req.params;
            const {title, auth, published_date} = req.body;

            const errors = {};
            if (!title.trim()) {
                errors.title = 'Title is required'
            }
            if (!auth.trim()) {
                errors.auth = 'Author is required'
            }
            if (!published_date) {
                errors.published_date = 'Date is required'
            }

            const book = Books.getBook(id);

            if (!book) {
                res.sendStatus(404);
                return;
            }

            if (_.isEmpty(errors)) {
                const updatedBook = Books.update(id, {title, auth, published_date});

                res.redirect(`/books/show/${id}`);
                return;
            }

            res.render('books/update', {errors, data: {...book}})
        } catch (e) {
            next(e);
        }
    }

    static delete(req, res, next) {
        try {
            const {id} = req.params;

            const book = Books.getBook(id);

            if (!book) {
                res.sendStatus(404);
                return;
            }

            Books.delete(id);

            res.redirect('/books?deleted=1');
        } catch (e) {
            next(e);
        }
    }
}

module.exports = BooksController;