const { title } = require('process');
const books = require('./books.json');
const sortBooksByTitle = require('./sortBooksByTitle.js');

module.exports = displaySearchedBooksByTitle = (titleToSearch) => {
    const bookResult = [searchBooksByTitle(Object.values(books), titleToSearch)]
    console.table(
        bookResult,
        ['id', 'title', 'status', 'authors']
    );
}

function searchBooksByTitle (books, input) {
    // sort books alphabetically by title
    const sortedBooks = sortBooksByTitle(books);

    // performing binary search
    let startIndex = 0;
    let endIndex = sortedBooks.length - 1;
    while(startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if(input === sortedBooks[middleIndex]['title']) {
            console.log("Target was found at index " + middleIndex);
            return sortedBooks[middleIndex];
        }
        if(input > sortedBooks[middleIndex]['title']) {
            startIndex = middleIndex + 1;
        }
        if(input < sortedBooks[middleIndex]['title']) {
            endIndex = middleIndex - 1;
        }
    }
    console.log("Target value not found in array");

    
}
