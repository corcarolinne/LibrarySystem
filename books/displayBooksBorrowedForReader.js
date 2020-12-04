const borrowings = require('../borrowings.json');
const books = require('../books/books.json');

module.exports = (idToSearch) => searchReaders(Object.values(borrowings), idToSearch)


function searchReaders(borrowings, input) {
    const bookIdsFound = []
  
    for(let i = 0; i < borrowings.length; i++) {
        if(borrowings[i].readerId === input) {
            bookIdsFound.push(borrowings[i].bookId);
            //console.log(bookIdsFound);
        }
    }
    searchBooks(Object.values(books), bookIdsFound);
    if (bookIdsFound.length === 0)
        console.log("This reader didn't borrow books yet.");

}

function searchBooks(books, bookIdsFound) {
    for(let i = 0; i < books.length; i++) {
        for(let j = 0; j < bookIdsFound.length; j++){
            if(books[i].id === bookIdsFound[j]) {
                console.log(books[i]);
            }
        }
    }
}