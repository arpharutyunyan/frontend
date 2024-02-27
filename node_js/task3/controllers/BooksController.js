const Books = require("../models/Books");

class BooksController {

    static index(req, res) {
        const {page = 1} = req.query;
        const pageItemsSize = 3;

        const {total, books} = Books.getBooksList(page, pageItemsSize);

        res.json({
            books,
            total: total,
            totalPages: Math.ceil(total / pageItemsSize)
        })
    }

    static create(req, res) {
        const {title, auth, published_date} = req.body;

        const book = Books.create({title, auth, published_date});

        res.json({
            book
        });
    }

    static show(req, res) {
        const {id} = req.params;

        const book = Books.getBook(id);

        if (!book) {
            res.sendStatus(404);
            return;
        }

        res.json({
            book
        })
    }

    static update(req, res) {
        const {id} = req.params;
        const {title, auth, published_date} = req.body;

        const book = Books.getBook(id);

        if (!book) {
            res.sendStatus(404);
        }

        const updatedBook = Books.update(id, {title, auth, published_date});

        res.json({
            book: updatedBook
        });
    }

    static delete(req, res) {
        const {id} = req.params;

        const book = Books.getBook(id);

        if (!book) {
            res.sendStatus(404);
            return;
        }

        Books.delete(id);

        res.json({
            "message": "Book successfully deleted"
        });
    }
}

module.exports = BooksController;