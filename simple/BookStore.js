class BookStore {
    constructor() {
        this._books = [];
    }

    get bookCount() {
        return this._books.length;
    }

    addBook(book) {
        if (book in this._books) {
            return null;
        } else {
            this._books.push(book);
            return book;
        }
    }

    getBook(id) {
        let foundBook = null;
        for (const book in this._books) {
            if (this._books[book].id === id) {
                foundBook = this._books[book];
                break;
            }
        }
        return foundBook;
    }
}

module.exports = BookStore;