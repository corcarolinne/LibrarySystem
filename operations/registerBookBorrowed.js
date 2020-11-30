const books = require('../books/books.json');
const borrowings = require('../borrowings.json');
const fs = require("fs"); 

module.exports = registerBookBorrowed = (bookId, readerId) => {

    borrowBook(bookId, readerId);
}

function borrowBook(bookId, readerId) {
    // declarating array to hold borrowings data
    let borrowingsInFile = [];
    // declarating obj to hold books data
    let booksInFile = {};

    // Defining new borrow 
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

        if (booksInFile[bookId].status === 'IN_TRANSIT') {
            console.log('book not available')
        } else {
            booksInFile[bookId].status = 'IN_TRANSIT'
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

                fs.writeFile('borrowings.json', JSON.stringify(borrowingsInFile, null, "  "), err => {
                
                    // Checking for errors 
                    if (err) throw err;  
                    
                    console.log('book ' + bookId + ' borrowed sucessfully by reader ' + readerId)
                });
            })
        }
    });
}