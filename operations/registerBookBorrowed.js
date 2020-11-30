const books = require('../books/books.json');
const borrowings = require('../borrowings.json');
const fs = require("fs"); 

module.exports = registerBookBorrowed = (bookId, readerId) => {

    borrowBook(bookId, readerId);
}

function borrowBook(bookId, readerId) {
    // declating array to hold borrowings data
    let borrowingsInFile = [];

    // Defining new borrow 
    let borrowing = { 
        bookId: `${bookId}`, 
        readerId: `${readerId}` 
    }; 
        // Read borrowings.json file 
    fs.readFile("borrowings.json", function(err, data) { 
        
        // Check for errors 
        if (err) throw err; 
    
        // Converting to JSON borrowings already recorded
        borrowingsInFile = JSON.parse(data);

        // including new borrowing in the array
        borrowingsInFile.push(borrowing);

        fs.writeFile('borrowings.json', JSON.stringify(borrowingsInFile), err => {
            console.log(borrowingsInFile);
         
            // Checking for errors 
            if (err) throw err;  
           
            console.log("Done writing"); // Success 
        });
    });   
}