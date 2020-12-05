// this file contains the logic for display readers by id

// imports
const { id } = require('process');
const readers = require('./readers.json')
const sortReadersById = require('./sortReadersById.js')

// exports function that calls sort function and display results on a table
module.exports = displayReadersById = () => {
    console.log('Showing readers by Id:');
    console.table(
        sortReadersById(Object.values(readers)),
        ['id', 'first_name', 'last_name', 'email', 'address']
    );
    process.exit();
}
