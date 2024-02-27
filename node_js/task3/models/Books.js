const path = require("path");
const fs = require("fs");
const {v4: uuidv4} = require("uuid");
const _ = require("lodash");


class Books {
    static create(params = {}) {
        try {
            const newBook = {
                id: uuidv4(),
                ...params
            }

            const filePath = this.getFilePath(newBook.id);

            fs.writeFileSync(filePath, JSON.stringify(newBook));

            return newBook;
        } catch (e) {
            console.log(e.message);
        }
    }

    static getBook(id) {
        try {
            const filePath = this.getFilePath(id);

            if (!fs.existsSync(filePath)) {
                return null;
            }

            return JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            console.log(e.message);
        }
    }

    static update(id, params = {}) {
        try {
            const filePath = this.getFilePath(id);

            const oldData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const filteredParams = _.pickBy(params, _.identity)

            const newBook = {
                ...oldData,
                ...filteredParams
            }

            fs.writeFileSync(filePath, JSON.stringify(newBook));

            return newBook;
        } catch (e) {
            console.log(e.message);
        }
    }

    static delete(id) {
        try {
            const filePath = this.getFilePath(id);

            fs.unlinkSync(filePath);
        } catch (e) {
            console.log(e.message);
        }
    }

    static getBooksList(page, limit) {
        try {
            const bookDir = path.join(__dirname, '../data/books');

            const booksList = fs.readdirSync(bookDir);
            const filteredBooks = _.chunk(booksList, limit)[page - 1] || [];

            const books = filteredBooks.map(file => {
                return JSON.parse(fs.readFileSync(path.join(bookDir, file), 'utf8'));
            })

            return {
                total: booksList.length,
                books
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    static getFilePath(id) {
        return path.join(__dirname, `../data/books/${id}.json`);
    }
}

module.exports = Books;