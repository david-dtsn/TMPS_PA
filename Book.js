// Book class
export class Book {
    constructor(title, author, category, price) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}


// a simple class