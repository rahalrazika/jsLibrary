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
    tableBody.innerHTML = ''
    if (myLibrary.length > 0) {
        for (let i = 0; i < myLibrary.length; i++) {
            let row = `
        <tr id="book-${i}"> 
            <td>${myLibrary[i].title} </td> 
            <td>${myLibrary[i].author} </td>
            <td>${myLibrary[i].numberOfPages} </td>
            <td><input ${myLibrary[i].read == "true" ? 'checked': ''} type="checkbox" id="read" onclick = "update(${i})"/></td>

            <td>
                <button class="btn btn-sm btn-danger" onclick="removeBook(${i})">Delete</button>
            </td>
        </tr>`
            tableBody.innerHTML += row
        }

    } else {
        tableBody.innerHTML = 'No books added yet'
    }
}


function createNewBook() {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let numberOfpages = document.getElementById('numberOfpages').value
    let read = document.getElementById('read').value

    let book = new Book(title, author, numberOfpages, read)
    myLibrary.push(book)
    showBooks(myLibrary)
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('numberOfpages').value = ""
    document.getElementById('read').value = "true"
}

function removeBook(id) {
    myLibrary.splice(id, 1)
    showBooks(myLibrary)
}

function update(id) {
    if(myLibrary[id].read == "true"){
       myLibrary[id].read = "false"
    }else{
        myLibrary[id].read = "true"

    }
    console.log(myLibrary)
}
showBooks(myLibrary)
