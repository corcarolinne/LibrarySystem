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

        // if book is available
        if (booksInFile[bookId].status === 'Available') {
            console.log('This book was not borrowed and is available to borrow')
        } 
        // if book is in transit, change its status
        else {
            booksInFile[bookId].status = 'Available'
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
                    
                    console.log('book ' + bookId + ' returned sucessfully')
                });
            })
        }
    });
}