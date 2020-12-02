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

function showBooks(myLibrary) {
    let tableBody = document.querySelector('.books-list')

    for (let i = 0; i < myLibrary.length; i++) {
        let row = `<tr> 
        <td>${myLibrary[i].title} </td> 
        <td>${myLibrary[i].author} </td>
        <td>${myLibrary[i].numberOfPages} </td>
        <td>${myLibrary[i].read} </td>
        </tr>`

        tableBody.innerHTML += row
    }
}

let book = new Book("my book 1", "jon doe", 240, true)
let book2 = new Book("my book 2", "jon doe", 340, true)
let book3 = new Book("my book 3", "jon doe", 140, false)

addBookToLibrary(book)
addBookToLibrary(book2)
addBookToLibrary(book3)
showBooks(myLibrary)