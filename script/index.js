let myLibrary = [];
let libraryLocalStorage = []

function Book(title, author, numberOfPages, read) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.read = read
}


function storageSave(value) {
    window.localStorage.setItem('library', JSON.stringify(value))
}

function initializeStorage() {
    
    let storageGet = window.localStorage.getItem('library')
    if (storageGet == null || storageGet == undefined) {
        window.localStorage.setItem('library', [])
    } else {
        myLibrary = JSON.parse(storageGet)
        showBooks()
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


function showBooks() {
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
    let validate = document.getElementById('alert')
   
    if(title == '' || author == '' || numberOfpages == ''  ) {
       validate.className = 'alert alert-danger '
       validate.innerHTML  = "fields can't be blanck"
    } else  {
        validate.className = 'alert alert-success'
        validate.innerHTML = "Your book is created "
        setTimeout(()=> validate.className = "d-none", 3000);

    let book = new Book(title, author, numberOfpages, read)
    myLibrary.push(book)
    storageSave(myLibrary)
    showBooks(myLibrary)
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('numberOfpages').value = ""
    document.getElementById('read').value = "true"
}

}
function alert() {

}
function removeBook(id) {
    myLibrary.splice(id, 1)
    storageSave(myLibrary)
    showBooks()
}

function update(id) {
    if(myLibrary[id].read == "true"){
       myLibrary[id].read = "false"
    }else{
        myLibrary[id].read = "true"
    }
    storageSave(myLibrary)
}

initializeStorage()