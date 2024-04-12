function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
Book.prototype.getTitle = function () {
  return this.title;
};
Book.prototype.getAuthor = function () {
  return this.author;
};
Book.prototype.getPages = function () {
  return this.pages;
};

const myLibrary = [];

const addBookToLibrary = (title, author, pages, library) => {
  const newBook = new Book(title, author, pages);
  library.push(newBook);
};

const updateBooksDisplay = (library, container) => {
  container.textContent = "";

  library.forEach((book) => {
    const cardDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    cardDiv.classList.add("card");
    titleDiv.classList.add("card-title");
    authorDiv.classList.add("card-author");
    pagesDiv.classList.add("card-pages");

    titleDiv.textContent = book.getTitle();
    authorDiv.textContent = book.getAuthor();
    pagesDiv.textContent = book.getPages();

    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(pagesDiv);
    libraryContainer.appendChild(cardDiv);
  });
};

const libraryContainer = document.querySelector(".library-container");

const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
  modal.showModal();
});
closeButton.addEventListener("click", () => {
  modal.close();
});

const formBook = document.querySelector(".form-book");
formBook.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");

  addBookToLibrary(title.value, author.value, pages.value, myLibrary);
  title.value = "";
  author.value = "";
  pages.value = "";

  updateBooksDisplay(myLibrary, libraryContainer);
  modal.close();
});
