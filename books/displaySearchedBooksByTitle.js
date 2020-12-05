// this file contains the logic for display search results for books by title

// imports
const { title } = require('process');
const books = require('./books.json');

// exports function that calls searchBooksByTitle function and passes title entered by the user
module.exports = displaySearchedBooksByTitle = (titleToSearch) => {
    return console.table(
        // calling function passing books data and title entered by the user
        searchBooksByTitle(Object.values(books), titleToSearch),
        ['id', 'title', 'status', 'authors', 'waitingList']
    )
}

// function receives a map and a string and returns an array of objects
function searchBooksByTitle (books, input) {
    // array to hold books found
    const result = []

    // loop through books
    for(let i = 0; i < books.length; i++) {
        // in case it finds a match on title and title entered by the user
        if((books[i].title).toUpperCase().includes(input.toUpperCase())) {
            // adds it to result array
            result.push(books[i]);
        }
    }
    // in case there's no match
    if (result.length === 0)
        console.log("No results. Please type title again or search for author.");

    return result
}
