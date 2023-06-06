
export class BookBuilder {
    constructor() {
        this.title = null;
        this.author = null;
        this.category = null;
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setAuthor(author) {
        this.author = author;
        return this;
    }

    setCategory(category) {
        this.category = category;
        return this;
    }

    build() {
        return new Book(this.title, this.author, this.category);
    }
}

//builder pattern