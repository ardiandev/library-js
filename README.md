# Library Project

This is a simple JavaScript-based library book management system that allows users to add, display, and delete books from their library. The application uses an HTML interface for user interaction and dynamic updates using JavaScript. This is a library project using HTML, CSS, and Vanilla Javascript. This is one of the Odin Project javascript project.

## Demo

Check out the [demo](https://ardiandev.github.io/library-js/)

## Features

- Add books to the library with title, author, pages, and read status.
- Display a table of books with the option to mark them as read or not read.
- Delete books from the library.
- Cancel the book addition operation.

## Usage

1. Open the `index.html` file in a web browser.
2. Click the "Add Book" button to open the dialog box.
3. Enter the book details and click the "Add" button to add the book to the library.
4. The added books are displayed in a table with the option to mark them as read or not read.
5. Click the "Delete" button to remove a book from the library.
6. Click the "Cancel" button to close the book addition dialog without saving.

## Code Overview

The JavaScript code uses event listeners and functions to manage the library operations. Below are some key components:

- **addBookbtn**: Function to handle the "Add Book" button click event, displaying and hiding the input dialog.
- **addBookToLibrary**: Function to add a book to the library array based on user input.
- **render**: Function to render the library table dynamically based on the stored books.
- **handleDelete**: Function to handle the deletion of a book from the library.

## License

This project is licensed under the [MIT License](LICENSE).
