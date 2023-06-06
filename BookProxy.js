
export class BookProxy {
    constructor(book) {
        this.book = book;
        this.price = null;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        if (this.price !== null) {
            return this.price;
        } else {
            return this.book.price;
        }
    }
}
//proxy pattern
//demonstrates an example of a virtual proxy - > is a type of proxy that controls access to a resource that is expensive to create
//it delays the creation or loading of the actual Book object until the getPrice() method is called.
