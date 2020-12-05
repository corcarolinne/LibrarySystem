// this file contains the logic for the feature to display books by title

// imports
const { title } = require('process');
const books = require('./books.json')
const sortBooksByTitle = require('./sortBooksByTitle.js')

// exports function that calls sortBooksByTitle function and prints results on a table
module.exports = displayBooksByTitle = () => {
    console.log('Showing books by title:');
    console.table(
        // calling sort function passing books data
        sortBooksByTitle(Object.values(books)),
        ['id', 'title', 'status', 'authors', 'waitingList']
    );
    // ending program
    process.exit();
}

