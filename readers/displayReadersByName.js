// this file contains the logic for display readers by name

// imports
const { first_name } = require('process');
const readers = require('./readers.json')
const sortReadersByName = require('./sortReadersByName.js')

// exports function that calls sort function and display results on a table
module.exports = displayReadersByName = () => {
    console.log('Showing readers by name:');
    console.table(
        sortReadersByName(Object.values(readers)),
        ['id', 'first_name', 'last_name', 'email', 'address']
    );
    process.exit();
}
