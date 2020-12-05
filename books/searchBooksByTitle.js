// this file contains the logic for search books by title whenever it's need by other features

// imports
const { title } = require('process');
const books = require('./books.json');

// exports function that calls searchBooks function passing books data and title to search for
module.exports = (titleToSearch) => searchBooks(Object.values(books), titleToSearch)

// function receives a map of objects and a string, returns an array of objects
function searchBooks(books, input) {
    const result = []
    // loop through books
    for(let i = 0; i < books.length; i++) {
        // in case there's a match between titles
        if((books[i].title).toUpperCase().includes(input.toUpperCase())) {
            result.push(books[i]);
        }
    }
    return result
}