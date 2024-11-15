const books = {};

// Function to get all books
function getBooks() {
  return books;
}

// Function to get a book by its ID
function getBookById(id) {
  const book = books[id];

  if (!book) {
    return null;
  }

  return book.id;
}

// Function to save a book
function saveBook(book) {
  books[book.id] = book;
}

// Save a book
saveBook({ id: 'book-1', name: 'Book 1' });

// Get all books and a specific book by ID
const myBooks = getBooks();
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);
