import { Library } from "./Library.js";
import { BookFactory } from "./BookFactory.js";

export class LibraryTemplate {
    constructor() {
        this.library = new Library();
        this.bookFactory = new BookFactory();
    }

    addBook(title, author, category) {
        const book = this.bookFactory.createBook(title, author, category);
        this.library.addBook(book);
    }

    removeBook(book) {
        this.library.removeBook(book);
    }

    getBooks() {
        return this.library.getBooks();
    }
}
//a facade pattern