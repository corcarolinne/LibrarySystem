// this file contains the logic for sort books by title whenever it's need by other features

// imports
const { title } = require('process');
const books = require('./books.json')

// exports function passing books data as parameter and returns books data ordered
module.exports = sortBooksByTitle = (books) => {
    // loop through books and sort them in numerical order
    let n = books.length;
    for (let i = 1; i < n; i++) {
        let current = books[i];
        let j = i-1;
        while ((j > -1) && (current['title'] < books[j]['title'])) {
            books[j+1] = books[j];
            j--;
        }
        books[j+1] = current;
    }
    return books;
}