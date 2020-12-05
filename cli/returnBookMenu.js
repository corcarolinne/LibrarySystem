// this file contains the workflow  of cli for return book feature

// imports
const searchBooksByTitle = require('../books/searchBooksByTitle.js')
const returnBookBorrowed = require('../operations/returnBookBorrowed.js')

// exports function to ask and read user's input
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

            // calling function to search for title entered, in case there are no results
            if(searchBooksByTitle(bookToReturn).length === 0) {
                console.log('No results. Please type again the title or use search to look for books.');
                returnBookMenu();
            }
            // in case there is at least one result
            else if(searchBooksByTitle(bookToReturn).length >= 1) {
                // display book information
                console.log(searchBooksByTitle(bookToReturn));
                readline.question(
                    "Please enter the id of the book" + "\n",
                    bookId => {
                        // validating if book id is a number
                        if(isNaN(bookId) === false){
                            // loop thru borrowings
                            console.log(`Book Id selected was: ${bookId}`);
                            // call funtion to register return of the book
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
