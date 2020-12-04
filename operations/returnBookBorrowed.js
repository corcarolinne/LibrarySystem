const books = require('../books/books.json');
const borrowings = require('../borrowings.json');
const fs = require("fs"); 

module.exports = returnBookBorrowed = (bookId) => {
    returnBook(bookId);
}

function returnBook(bookId) {
    // declarating array to hold borrowings data
    let borrowingsInFile = [];
    // declarating obj to hold books data
    let booksInFile = {};

    // read books file to change status
    // Read books.json file 
    fs.readFile("./books/books.json", function(err, data) { 
        
        // Check for errors 
        if (err) throw err; 
    
        // Converting to JSON books file
        booksInFile = JSON.parse(data);

        if(booksInFile[bookId] === undefined) {
            console.log('This book id do not belong to any of the books in transit. Please try to return again or search for books for more information.')
        }
        // if book is available
        else if (booksInFile[bookId].status === 'Available') {
            console.log('This book was not borrowed and is currently available. Please try to return again or search for books for more information.')
        } 
        // if book is in transit, change its status
        else if(booksInFile[bookId].status === 'IN_TRANSIT') {
            booksInFile[bookId].status = 'Available';

            // write on books.json the books
            fs.writeFile("./books/books.json", JSON.stringify(booksInFile, null, "  "), () => {});

            // read borrowings
            fs.readFile("borrowings.json", function(err, data) { 
            
                // check for errors 
                if (err) throw err; 
            
                // converting to JSON borrowings already recorded
                borrowingsInFile = JSON.parse(data);

                //console.log(borrowingsInFile)
                borrowingsInFile.splice(borrowingsInFile.findIndex(e => e.bookId === bookId),1);
                console.log(borrowingsInFile);

                // write in borrowings file
                fs.writeFile('borrowings.json', JSON.stringify(borrowingsInFile, null, "  "), err => {
                    // checking for errors 
                    if (err) throw err;  
                    
                    console.log('Book: ' + bookId + ' was returned sucessfully.')
                    if(booksInFile[bookId].waitingList.length > 0) {
                        console.log('The first reader Id on the waiting list for this book is: ' + booksInFile[bookId].waitingList[0]);
                        
                    }
                });
            })
        }
        else {
            console.log('Book id not found. Please check the number you typed and try again.');
        }
    });
}