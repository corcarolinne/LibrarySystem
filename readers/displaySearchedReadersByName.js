// this file contains the logic to display results for search readers by name

// imports
const { first_name } = require('process');
const readers = require('./readers.json');
const searchReadersByName = require('./searchReadersByName.js')

// exports function that calls searchReadersByName and display results of it on a table
module.exports = displaySearchedReadersByName = (nameToSearch) => {
    console.table(
        searchReadersByName(nameToSearch),
        ['id','first_name', 'last_name', 'email','address']
    )
}
