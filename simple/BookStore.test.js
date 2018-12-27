const BookStore = require('./BookStore');
const expect = require('chai').expect;

describe (`BookStore`, () => {
    let bookStore;
    const harryPotterFirstBook = {id: 1, title: `Harry Potter and the Philospher's Stone`};

    beforeEach(() => {
        bookStore = new BookStore();
    });

    describe('new store', () => {
        it(`should have no books at the beginning`, () => {
            expect(bookStore.bookCount).to.equal(0);
        });

        it(`should increase number of books when first book added and return the book`, () => {
            const book = bookStore.addBook(harryPotterFirstBook);
            expect(bookStore.bookCount).to.equal(1);
            expect(book).to.equal(harryPotterFirstBook);
        });

        it(`should return null when searching book`, () => {
            expect(bookStore.getBook(harryPotterFirstBook.id)).to.be.null;
        });
    });

    describe('with one book', () => {
        beforeEach(() => {
            bookStore.addBook(harryPotterFirstBook);
        });
        it(`should find book by its ID`, () => {
           expect(bookStore.getBook(harryPotterFirstBook.id)).to.equal(harryPotterFirstBook); 
        });
        it(`should not find a book with wrong ID`, () => {
            expect(bookStore.getBook(2)).to.be.null;
        });
    });
});