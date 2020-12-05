// this file contains the logic for sort books by author whenever it's need by other features

// imports
const { authors } = require('process');
const books = require('./books.json')

// exports function passing books data as parameter and returns book data ordered
module.exports = sortBooksByAuthor = (books) => {
    let n = books.length;
    // loop through books and sort them in alphabetical order
    for (let i = 1; i < n; i++) {
        let current = books[i];
        let j = i-1;
        while ((j > -1) && (current['authors'] < books[j]['authors'])) {
            books[j+1]= books[j];
            j--;
        }
        books[j+1] = current;
    }
    return books;
}