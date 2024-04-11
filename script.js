function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}
Book.prototype.getName = function () {
  return this.name;
};
Book.prototype.getAuthor = function () {
  return this.author;
};
Book.prototype.getPages = function () {
  return this.pages;
};

const myLibrary = [];

const addBookToLibrary = (name, author, pages, library) => {
  const newBook = new Book(name, author, pages);
  library.push(newBook);
};

// DEBUG:
//addBookToLibrary("name1", "author1", 123, myLibrary);
myLibrary.forEach((book) => {
  console.log(`${book.getName()} by ${book.getAuthor()} with ${book.getPages()} pages.`);
});
