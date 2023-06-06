import { Book } from "./Book.js";
export class BookFactory {
    createBook(title, author, category) {
        return new Book(title, author, category);
    }
}

//factory pattern ->we have a method to create a book with 3 arg