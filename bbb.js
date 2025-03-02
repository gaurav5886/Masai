class Book {
    constructor(title, author, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
}


class Member {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (!book.isAvailable) {
            console.log(`${book.title} is already borrowed.`);
            return;
        }
        
        if (this.borrowedBooks.length >= 3) {
            console.log(`${this.name} cannot borrow more than 3 books.`);
            return;
        }

        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed ${book.title}.`);
    }
}


class PremiumMember extends Member {
    constructor(name) {
        super(name);
        this.specialCollectionAccess = true;
    }

    borrowBook(book) {
        if (!book.isAvailable) {
            console.log(`${book.title} is already borrowed.`);
            return;
        }

        if (this.borrowedBooks.length >= 5) {
            console.log(`${this.name} cannot borrow more than 5 books.`);
            return;
        }

        super.borrowBook(book);
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("Moby Dick", "Herman Melville");

const regularMember = new Member("Alice");
const premiumMember = new PremiumMember("Bob");

regularMember.borrowBook(book1);
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);
regularMember.borrowBook(book4); 

premiumMember.borrowBook(book1); 
premiumMember.borrowBook(book2); 
premiumMember.borrowBook(book3); 
premiumMember.borrowBook(book4);

console.log("Regular Member's Borrowed Books:", regularMember.borrowedBooks);
console.log("Premium Member's Borrowed Books:", premiumMember.borrowedBooks);