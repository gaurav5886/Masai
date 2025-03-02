function Book(title, author) {
    return {
        title: title,
        author: author,
        details: function () {
            console.log(`Title: ${this.title}, Author: ${this.author}`);
        }
    };
}

function createLibrary() {
    const books = [];

    return {
        addBook: function (book) {
            books.push(book);
        },
        removeBook: function (title) {
            const index = books.findIndex(book => book.title === title);
            if (index !== -1) {
                books.splice(index, 1);
            }
        },
        listBooks: function () {
            books.forEach(book => book.details());
        }
    };
}