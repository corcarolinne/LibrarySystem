// this file contains the logic for displaying books borrowed by a specific reader

// imports
const borrowings = require('../borrowings.json');
const books = require('../books/books.json');

// exporting function that calls searchReaders function
module.exports = (idToSearch) => searchReaders(Object.values(borrowings), idToSearch)

// it receives an array with borrowings data, and a reader id entered by the user
function searchReaders(borrowings, input) {
    
    // declaring array to hold reader ids found through file
    const bookIdsFound = []
    // looping through borrowings file
    for(let i = 0; i < borrowings.length; i++) {
        // if it finds readerId same as the one the user typed
        if(borrowings[i].readerId === input) {
            // it adds the bookId to the array
            bookIdsFound.push(borrowings[i].bookId);
        }
    }
    // calling function to search for books passing books data and the booksId array
    searchBooks(Object.values(books), bookIdsFound);
    // in case the reader didn't borrow any books
    if (bookIdsFound.length === 0) {
        console.log("This reader didn't borrow books yet.");
    }
}

// this function searches for the found booksIds on the books file
function searchBooks(books, bookIdsFound) {
    // loops through books
    for(let i = 0; i < books.length; i++) {
        // loops through booksIds array
        for(let j = 0; j < bookIdsFound.length; j++){
            // if there's any matches
            if(books[i].id === bookIdsFound[j]) {
                // print information from the book found
                console.log(books[i]);
            }
        }
    }
}