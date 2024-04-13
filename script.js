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
Book.prototype.toggleIsRead = function () {
  this.isRead = !this.isRead;
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
    const toggleIsReadBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    cardDiv.classList.add("card");
    cardDiv.setAttribute("id", `card-${index}`);
    titleDiv.classList.add("card-title");
    authorDiv.classList.add("card-author");
    pagesDiv.classList.add("card-pages");
    isReadDiv.classList.add("card-read");
    toggleIsReadBtn.classList.add("card-toggle-read-btn");
    removeBtn.classList.add("card-remove-btn");

    titleDiv.textContent = book.getTitle();
    authorDiv.textContent = book.getAuthor();
    pagesDiv.textContent = `${book.getPages()} pages`;
    isReadDiv.textContent = book.getIsRead() ? "Already read" : "Not read yet";
    toggleIsReadBtn.textContent = "TOGGLE READ";
    removeBtn.textContent = "REMOVE BOOK";

    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(pagesDiv);
    cardDiv.appendChild(isReadDiv);
    cardDiv.appendChild(toggleIsReadBtn);
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
  const cardId = e.target.parentElement.id;
  const idIndex = cardId[cardId.length - 1];

  // Logic to remove book from library
  if (e.target.classList.contains("card-remove-btn")) {
    // Get parent's ID
    // Remove that specific index from myLibrary
    // Update the display

    myLibrary.splice(idIndex, 1);
    updateBooksDisplay(myLibrary, libraryContainer);
  }

  // Logic to toggle read status for an existing book
  if (e.target.classList.contains("card-toggle-read-btn")) {
    // Call the specific book's toggleIsRead function
    // Get the parent's ID
    myLibrary[idIndex].toggleIsRead();
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
