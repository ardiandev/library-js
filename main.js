const addBtn = document.querySelector(".add-book-btn");
let checked = false;
const table = document.querySelector(".library");
const addBook = document.querySelector(".add-book-item");
const inputBox = document.querySelector(".dialog-box");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addBtn.addEventListener("click", addBookbtn);

function addBookbtn() {
  const allInput = document.querySelectorAll("form input");
  allInput.forEach(input => (input.value = ""));

  console.log(allInput);

  if (!checked) {
    inputBox.style.display = "block";
    checked = true;
  } else {
    inputBox.style.display = "none";
    checked = false;
  }
}

addBook.addEventListener("click", event => {
  event.preventDefault();
  addBookToLibrary();
});
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  render();
}

function render() {
  table.innerHTML = "";
  myLibrary.forEach(({ title, author, pages, read }, index) => {
    let card = document.createElement("tr");

    card.innerHTML = `
    <td>${index + 1}</td>
    <td>${title}</td>
    <td>${author}</td>
    <td>${pages}</td>
    <td>${read ? "Read" : "Not Read"}</td>
    <td><button>delete</button></td>  
    `;

    table.appendChild(card);
    inputBox.style.display = "none";
    checked = false;
  });
}
