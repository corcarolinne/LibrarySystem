const displaySearchedBooksByTitle = require('../books/displaySearchedBooksByTitle.js');
const registerBookBorrowed = require('../books/registerBookBorrowed.js')

const executeNextStep = (bookToBorrow) => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please enter the id of the reader" + "\n",
        readerId => {
            console.log(`Reader selected was ${readerId}`);
            registerBookBorrowed(bookToBorrow, readerId)
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

            if(displaySearchedBooksByTitle(bookToBorrow).length > 1) {
                console.log('More than one result with this title')
                readline.close();
            } else {
                executeNextStep(bookToBorrow);
            }  
        }
    )
}
