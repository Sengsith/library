function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
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
Book.prototype.getIsRead = function () {
  return this.isRead;
};

const myLibrary = [];

const addBookToLibrary = (title, author, pages, isRead, library) => {
  const newBook = new Book(title, author, pages, isRead);
  library.push(newBook);
};

const updateBooksDisplay = (library, container) => {
  container.textContent = "";

  library.forEach((book, index) => {
    const cardDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const isReadDiv = document.createElement("div");
    const removeBtn = document.createElement("button");

    cardDiv.classList.add("card");
    cardDiv.setAttribute("id", `card-${index}`);
    titleDiv.classList.add("card-title");
    authorDiv.classList.add("card-author");
    pagesDiv.classList.add("card-pages");
    isReadDiv.classList.add("card-read");
    removeBtn.classList.add("card-remove-btn");

    titleDiv.textContent = book.getTitle();
    authorDiv.textContent = book.getAuthor();
    pagesDiv.textContent = book.getPages();
    isReadDiv.textContent = book.getIsRead() ? "Already read" : "Not read yet";
    removeBtn.textContent = "REMOVE";

    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(pagesDiv);
    cardDiv.appendChild(isReadDiv);
    cardDiv.appendChild(removeBtn);
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

// Logic for deleting a card
libraryContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-remove-btn")) {
    // Get parent's ID
    // Remove that specific index from myLibrary
    // Update the display
    const cardId = e.target.parentElement.id;
    const id = cardId[cardId.length - 1];

    myLibrary.splice(id, 1);
    updateBooksDisplay(myLibrary, libraryContainer);
  }
});

const formBook = document.querySelector(".form-book");
formBook.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isRead = document.querySelector("#read");

  addBookToLibrary(title.value, author.value, pages.value, isRead.checked, myLibrary);
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;

  updateBooksDisplay(myLibrary, libraryContainer);
  modal.close();
});
