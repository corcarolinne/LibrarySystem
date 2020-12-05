// this file contains the logic for display search results for books by author

// imports
const { authors } = require('process');
const books = require('./books.json');
const sortBooksByAuthor = require('./sortBooksByAuthor.js');

// exports function that calls searchBooksByAuthor function and passes author entered by the user
module.exports = displaySearchedBooksByAuthor = (authorToSearch) => {
    console.table(
        // passing books data and author entered by the user
        searchBooksByAuthor(Object.values(books), authorToSearch),
        ['id', 'title', 'status', 'authors', 'waitingList']
    );
}

// function receives a map and a string and returns an array of objects
function searchBooksByAuthor (books, input) {
    // array to hold books found
    const result = []

    // loop through books
    for(let i = 0; i < books.length; i++) {
        // in case it finds a match on authors and author entered by the user
        if((books[i].authors).toUpperCase().includes(input.toUpperCase())) {
            // adds book to books array
            result.push(books[i]);
        }
    }
    // in case there's no match
    if (result.length === 0)
        console.log("No results. Please type author again or search for title.");

    return result
}