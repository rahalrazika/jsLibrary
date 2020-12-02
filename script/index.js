let myLibrary = [];

function Book(title, author, numberOfPages, read) {
 this.title = title
 this.author = author
 this.numberOfPages = numberOfPages
 this.read = read
}


function addBookToLibrary(book) {
myLibrary.push(book)
}

let book = new Book("my book", "jon doe", 240, true)
addBookToLibrary(book)
console.log(myLibrary)