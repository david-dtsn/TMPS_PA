import { LibraryTemplate } from "./LibraryTemplate.js";
import { BookIterator } from "./BookIterator.js";
import { BookProxy } from "./BookProxy.js";
import { Book } from "./Book.js";
import { BookMemento } from "./BookMemento.js";

let library = new LibraryTemplate();

console.log('Add Books to the library:');
library.addBook("Book 1", "Author 1", "Category 1");
library.addBook("Book 2", "Author 2", "Category 2");
library.addBook("Book 3", "Author 3", "Category 3");

console.log('Print books');
let books = library.getBooks();
let bookProxy = new BookProxy(books[0]);
bookProxy.setPrice(9.99);
console.log(bookProxy.getPrice());


library.removeBook(books[1]);

let memento = new BookMemento(books[0]);

  


let restoredBook = new Book(memento.title, memento.author, memento.category);
library.addBook(restoredBook);

let bookIterator = new BookIterator(library.getBooks());
while (bookIterator.hasNext()) {
    let book = bookIterator.next();
    console.log(book.title);
}
