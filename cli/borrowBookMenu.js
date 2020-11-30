const displaySearchedBooksByTitle = require('../books/displaySearchedBooksByTitle.js');
const registerBookBorrowed = require('../books/registerBookBorrowed.js')
const searchReadersByName = require('../readers/searchReadersByName.js')
const searchBooksByTitle = require('../books/searchBooksByTitle.js')

const executeNextStep = (bookId) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please enter the name of the reader" + "\n",
        readerName => {
            console.log(`Reader name was ${readerName}`);

            if(searchReadersByName(readerName).length === 0) {
                console.log('No results.');
                executeNextStep(bookId);
            }
            else if(searchReadersByName(readerName).length >= 1) {
                console.log(searchReadersByName(readerName));
                readline.question(
                    "Please enter the id of the reader" + "\n",
                    readerId => {
                        console.log(`Reader Id selected was ${readerId}`);
                        registerBookBorrowed(bookId, readerId);
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
        "Please enter the title of the book to borrow" + "\n",
        bookToBorrow => {
            console.log(`Choosen book was ${bookToBorrow}`);

            // in case there's no result
            if(searchBooksByTitle(bookToBorrow).length === 0) {
                console.log('No results.');
                borrowBookMenu();
            }
            else if(searchBooksByTitle(bookToBorrow).length >= 1) {
                console.log(searchBooksByTitle(bookToBorrow));
                readline.question(
                    "Please enter the id of the book" + "\n",
                    bookId => {
                        console.log(`Book Id selected was ${bookId}`);
                        executeNextStep(bookId);
                    })      
            }
        }
    )
}
