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

function createNewBook() {
//1. get values from the form
// 2. create a book  objects
//3. add the book to library
//4.call the show books  function 
let title = document.getElementById('title').value
let author = document.getElementById('author').value
let numberOfpages = document.getElementById('NumberOfpages').value
let read = document.getElementById('read').value

 let book = new Book(title, author, numberOfpages, read)
    myLibrary.push(book)
    showBooks(myLibrary)
 document.getElementById('title').value = ""
 document.getElementById('author').value = ""
 document.getElementById('numberOfpages').value = ""
 document.getElementById('read').value = "true" 


}

showBooks(myLibrary)
