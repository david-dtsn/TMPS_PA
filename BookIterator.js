
export class BookIterator {
    constructor(books) {
        this.books = books;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.books.length;
    }

    next() {
        const book = this.books[this.index];
        this.index++;
        return book;
    }
}

//iterator pattern