function createBook(title, author) {
    return {
      title,
      author,
      printInfo() {
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }