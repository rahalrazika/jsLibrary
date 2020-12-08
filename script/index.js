
let myLibrary = [];


const bookFactory = (title, author, numberOfPages, read) => {
  return{title, author, numberOfPages, read}
}

const getBookValues = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const numberOfpages = document.getElementById('numberOfpages').value;
  const read = document.getElementById('read').value;
  const book = bookFactory(title, author, numberOfpages, read);
  return book;
};

const showBooks = () => {
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
};


const storageSave = (value) => window.localStorage.setItem('library', JSON.stringify(value));

const hideForm = () => { document.getElementById('book-form').style.display = 'none'; };


const resetForm = () => {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('numberOfpages').value = '';
  document.getElementById('read').value = 'true';
  hideForm();
};


const validateBook = () => {
  const book = getBookValues();
  if (book.title === '' || book.author === '' || book.numberOfpages === '') {
    return false;
  }
  return true;
};

const alerts = (type) => {
  const validate = document.getElementById('alert');
  if (type) {
    validate.className = 'alert alert-success';
    validate.innerHTML = 'Your book is created ';
    setTimeout(() => { validate.className = 'd-none'; }, 3000);
  } else {
    validate.className = 'alert alert-danger ';
    validate.innerHTML = "fields can't be blanck";
  }
};

const createNewBook = () => {
  if (validateBook()) {
    myLibrary.push(getBookValues());
    storageSave(myLibrary);
    showBooks(myLibrary);
    alerts(true);
    resetForm();
  } else {
    alerts(false);
  }
};

const btnForm = () => {
  const form = document.getElementById('book-form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
};

const removeBook = (id) => {
  myLibrary.splice(id, 1);
  storageSave(myLibrary);
  showBooks();
};

const update = (id) => {
  if (myLibrary[id].read === 'true') {
    myLibrary[id].read = 'false';
  } else {
    myLibrary[id].read = 'true';
  }
  storageSave(myLibrary);
};

const initializeStorage = () => {
  const storageGet = window.localStorage.getItem('library');
  hideForm();
  if (storageGet === null || storageGet === undefined) {
    window.localStorage.setItem('library', []);
  } else {
    myLibrary = JSON.parse(storageGet);
    showBooks();
  }
};

const skipOnInitialize = () => {
  const skipFunctionsInitialize = true;
  if (!skipFunctionsInitialize) {
    createNewBook();
    btnForm();
    update();
    removeBook();
  }
};

initializeStorage();
skipOnInitialize();
