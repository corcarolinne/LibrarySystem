const registerBookBorrowed = require('../operations/registerBookBorrowed.js')
const searchReadersByName = require('../readers/searchReadersByName.js')
const searchBooksByTitle = require('../books/searchBooksByTitle.js')

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

            if(searchReadersByName(readerName).length === 0) {
                executeNextStep(bookId);
            }
            else if(searchReadersByName(readerName).length >= 1) {
                console.log(searchReadersByName(readerName));
                readline.question(
                    "Please enter the id of the reader." + "\n",
                    readerId => {
                        if(isNaN(readerId) === false){
                            console.log(`Reader Id selected was: ${readerId}`);
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

            // in case there's no result
            if(searchBooksByTitle(bookToBorrow).length === 0) {
                console.log('No results. Please type again the title or use search to look for books first.');
                borrowBookMenu();
            }
            else if(searchBooksByTitle(bookToBorrow).length >= 1) {
                console.log(searchBooksByTitle(bookToBorrow));
                readline.question(
                    "Please enter the id of the book." + "\n",
                    bookId => {
                        if(isNaN(bookId) === false){
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
