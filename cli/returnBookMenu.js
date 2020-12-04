const searchBooksByTitle = require('../books/searchBooksByTitle.js')
const returnBookBorrowed = require('../operations/returnBookBorrowed.js')

module.exports =  returnBookMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    
    readline.question(
        "Please enter the title of the book to return." + "\n",
        bookToReturn => {
            console.log(`Chosen book was: ${bookToReturn}`);

            // in case there's no result
            if(searchBooksByTitle(bookToReturn).length === 0) {
                console.log('No results. Please type again the title or use search to look for books.');
                returnBookMenu();
            }
            else if(searchBooksByTitle(bookToReturn).length >= 1) {
                console.log(searchBooksByTitle(bookToReturn));
                readline.question(
                    "Please enter the id of the book" + "\n",
                    bookId => {
                        if(isNaN(bookId) === false){
                            // loop thru borrowings
                            console.log(`Book Id selected was: ${bookId}`);
                            returnBookBorrowed(bookId);
                        readline.close();
                        } else {
                            console.log('Please type only numbers for book id.')
                            returnBookMenu();
                        } 
                    })      
            }
        }
    )
}
