export class BookMemento {
    constructor(book) {
        this.title = book.title;
        this.author = book.author;
        this.category = book.category;
    }
    restore(book) {
        book.title = this.title;
        book.author = this.author;
        book.category = this.category;
    }
}

//memento pattern to store info about books and restore the info