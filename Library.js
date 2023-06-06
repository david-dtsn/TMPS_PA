
export class Library {
    constructor() {
        if (Library.instance) {
            return Library.instance;
        }
        this.books = [];
        Library.instance = this;
        return this;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1);
        }
    }

    getBooks() {
        return this.books;
    }
}
//a class for library that use singleton pattern
//how to know? We have an if else statment so in case the instance is true, we dont create instance