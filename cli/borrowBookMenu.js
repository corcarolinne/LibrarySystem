const displaySearchedBooksByTitle = require('../books/displaySearchedBooksByTitle.js');
const registerBookBorrowed = require('../books/registerBookBorrowed.js')
const displaySearchedReadersByName = require('../readers/displaySearchedReadersByName.js')

const executeNextStep = (bookToBorrow) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please enter the name of the reader" + "\n",
        readerName => {
            console.log(`Reader name was ${readerName}`);

            if(displaySearchedReadersByName(readerName).length === 0) {
                console.log('No results.');
                executeNextStep(bookToBorrow);
            }
            else if(displaySearchedReadersByName(readerName).length >= 1) {
                console.log(displaySearchedReadersByName(readerName));
                readline.question(
                    "Please enter the id of the reader" + "\n",
                    readerId => {
                        console.log(`Reader Id selected was ${readerId}`);
                        registerBookBorrowed(bookToBorrow, readerId);
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
            if(displaySearchedBooksByTitle(bookToBorrow).length === 0) {
                console.log('No results.');
                borrowBookMenu();
            }
            // in case there's more than one result
            else if(displaySearchedBooksByTitle(bookToBorrow).length > 1) {
                console.log('More than one book with this title! Please type the title again.')
                borrowBookMenu();
                //readline.close();
            }
            // in case there's one result
            else {
                executeNextStep(bookToBorrow);
            }
        }
    )
}
