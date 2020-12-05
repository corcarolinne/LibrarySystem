// this file contains the workflow of the cli for borrow book feature

// imports
const registerBookBorrowed = require('../operations/registerBookBorrowed.js')
const searchReadersByName = require('../readers/searchReadersByName.js')
const searchBooksByTitle = require('../books/searchBooksByTitle.js')

// function to ask and read user's input
const executeNextStep = (bookId) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    readline.question(
        "Please enter the name of the reader." + "\n",
        readerName => {
            console.log(`Reader name was: ${readerName}`);
            // if there are no results on readers file with this id
            if(searchReadersByName(readerName).length === 0) {
                executeNextStep(bookId);
            }
            // in case there are results
            else if(searchReadersByName(readerName).length >= 1) {
                // display readers data
                console.log(searchReadersByName(readerName));
                // ask for reader id
                readline.question(
                    "Please enter the id of the reader." + "\n",
                    readerId => {
                        // validating reader id as a number only
                        if(isNaN(readerId) === false){
                            console.log(`Reader Id selected was: ${readerId}`);
                            // calling function to register borrowing
                            registerBookBorrowed(bookId, readerId);
                            readline.close();
                        } else {
                            console.log('Please type only numbers for book id.')
                            borrowBookMenu();
                        } 
                    })      
            }
        }
    )
}

// exports function to ask and read user's input
module.exports =  borrowBookMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    
    readline.question(
        "Please enter the title of the book to borrow." + "\n",
        bookToBorrow => {
            console.log(`Chosen book was: ${bookToBorrow}`);

            // in case there's no result on books with this title
            if(searchBooksByTitle(bookToBorrow).length === 0) {
                console.log('No results. Please type again the title or use search to look for books first.');
                borrowBookMenu();
            }
            // in case there's at least one result
            else if(searchBooksByTitle(bookToBorrow).length >= 1) {
                // calling function to search books by title
                console.log(searchBooksByTitle(bookToBorrow));
                readline.question(
                    "Please enter the id of the book." + "\n",
                    bookId => {
                        // validating that user entered only numbers on bookId
                        if(isNaN(bookId) === false){
                            // call function to ask and read next inputs
                            executeNextStep(bookId);
                        } else {
                            console.log('Please type only numbers for bookId.')
                            borrowBookMenu();
                        }
                    })      
            }
        }
    )
}
