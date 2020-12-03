let myLibrary = [];
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const numberOfpages = document.getElementById('numberOfpages').value;
const read = document.getElementById('read').value;
const validate = document.getElementById('alert');


function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function showBooks() {
  const tableBody = document.querySelector('.books-list');
  tableBody.innerHTML = '';
  if (myLibrary.length > 0) {
    for (let i = 0; i < myLibrary.length; i += 1) {
      const row = `
          <tr id="book-${i}"> 
              <td>${myLibrary[i].title} </td> 
              <td>${myLibrary[i].author} </td>
              <td>${myLibrary[i].numberOfPages} </td>
              <td><input ${myLibrary[i].read === 'true' ? 'checked' : ''} type="checkbox" id="read" onclick = "update(${i})"/></td>
  
              <td>
                  <button class="btn btn-sm btn-danger" onclick="removeBook(${i})">Delete</button>
              </td>
          </tr>`;
      tableBody.innerHTML += row;
    }
  } else {
    tableBody.innerHTML = 'No books added yet';
  }
}


function storageSave(value) {
  window.localStorage.setItem('library', JSON.stringify(value));
}
function hideForm() {
  document.getElementById('book-form').style.display = 'none';
}


function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('numberOfpages').value = '';
  document.getElementById('read').value = 'true';
  hideForm();
}


function validateBook() {
  if (title === '' || author === '' || numberOfpages === '') {
    return false;
  }
  return true;
}

function alerts(type) {
  if (type) {
    validate.className = 'alert alert-success';
    validate.innerHTML = 'Your book is created ';
    setTimeout(() => { validate.className = 'd-none'; }, 3000);
  } else {
    validate.className = 'alert alert-danger ';
    validate.innerHTML = "fields can't be blanck";
  }
}

function createNewBook() {
  if (validateBook) {
    const book = new Book(title, author, numberOfpages, read);

    myLibrary.push(book);
    storageSave(myLibrary);
    showBooks(myLibrary);
    alerts(true);
    resetForm();
  } else {
    alerts(false);
  }
}
function btnForm() {
  const form = document.getElementById('book-form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}
function removeBook(id) {
  myLibrary.splice(id, 1);
  storageSave(myLibrary);
  showBooks();
}

function update(id) {
  if (myLibrary[id].read === 'true') {
    myLibrary[id].read = 'false';
  } else {
    myLibrary[id].read = 'true';
  }
  storageSave(myLibrary);
}

function initializeStorage() {
  const storageGet = window.localStorage.getItem('library');
  hideForm();
  if (storageGet === null || storageGet === undefined) {
    window.localStorage.setItem('library', []);
  } else {
    myLibrary = JSON.parse(storageGet);
    showBooks();
  }
}

function skipOnInitialize() {
  const skipFunctionsInitialize = true;
  if (!skipFunctionsInitialize) {
    createNewBook();
    btnForm();
    update();
    removeBook();
  }
}

initializeStorage();
skipOnInitialize();