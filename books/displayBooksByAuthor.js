// this file contains the logic for the feature to display books by author

// imports
const { authors } = require('process');
const books2 = require('./books.json')
const sortBooksByAuthor = require('./sortBooksByAuthor.js')

// exports function that calls sortBooksByAuthor function and prints results on a table
module.exports = displayBooksByAuthor = () => {
    console.log('Showing books by author:');
    console.table(
        // calling sort function passing books data
        sortBooksByAuthor(Object.values(books2)),
        ['id', 'title', 'status', 'authors', 'waitingList']
    );
    // ending program
    process.exit();
}

