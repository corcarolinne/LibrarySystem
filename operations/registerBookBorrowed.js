// this file contains the logic for register a book borrowed in the system (borrowings.json file)

// imports
const books = require('../books/books.json');
const borrowings = require('../borrowings.json');
const addReaderToWaitingList = require ('./addReaderToWaitingList.js')
const removeReaderOfWaitingList = require ('./removeReaderOfWaitingList.js')
const fs = require("fs"); 

// exports function that calls a function that receives bookid and reader id entered by the user
module.exports = registerBookBorrowed = (bookId, readerId) => {
    borrowBook(bookId, readerId);
}

// function to register borrow of a book
function borrowBook(bookId, readerId) {
    // declarating array to hold borrowings data
    let borrowingsInFile = [];
    // declarating obj to hold books data
    let booksInFile = {};
    // defining new borrow 
    let borrowing = { 
        bookId: `${bookId}`, 
        readerId: `${readerId}` 
    }; 

    // Read books.json file 
    fs.readFile("./books/books.json", function(err, data) { 
        // Check for errors 
        if (err) throw err; 
        // Converting to JSON books file
        booksInFile = JSON.parse(data);
        // in case book is in transit
        if (booksInFile[bookId].status === 'IN_TRANSIT') {
            console.log('Book is already in transit. Reader will be added to the waiting list.')
            // adding reader to the waiting list
            addReaderToWaitingList(booksInFile[bookId].waitingList, readerId);
            fs.writeFile("./books/books.json", JSON.stringify(booksInFile, null, "  "), () => {});
            console.log('Reader: ' + readerId + ' was sucessfully added on the waiting list of book: ' + bookId);
        } 
        // in case the book is available
        else if(booksInFile[bookId].status === 'Available') {
            // change status
            booksInFile[bookId].status = 'IN_TRANSIT'
            // check if reader is on waiting list
            for(let i= 0; i < (booksInFile[bookId].waitingList).length; i++) {
                if(booksInFile[bookId].waitingList[i] === readerId) {
                    removeReaderOfWaitingList(booksInFile[bookId].waitingList, readerId);
                }
            }
            // write on books.json the books
            fs.writeFile("./books/books.json", JSON.stringify(booksInFile, null, "  "), () => {});
            // Read borrowings.json file
            fs.readFile("borrowings.json", function(err, data) { 
                // Check for errors 
                if (err) throw err; 
                // Converting to JSON borrowings already recorded
                borrowingsInFile = JSON.parse(data);
                // including new borrowing in the array
                borrowingsInFile.push(borrowing);
                // rewriting borrowings file
                fs.writeFile('borrowings.json', JSON.stringify(borrowingsInFile, null, "  "), err => {
                    // Checking for errors 
                    if (err) throw err;  
                    console.log('Book: ' + bookId + ' was borrowed sucessfully by reader: ' + readerId)
                });
            })
        }
    });
}