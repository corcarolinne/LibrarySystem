// this file contains the logic to display results for search readers by id

// imports
const { id } = require('process');
const readers = require('./readers.json');

// exports function that calls searchReadersById and display results of it on a table
module.exports = displaySearchedReadersById = (idToSearch) => {
    console.table(
        searchReadersById(Object.values(readers), idToSearch),
        ['id', 'first_name', 'last_name', 'email', 'address']
    );
}

// this function search readers by id, receiving readers data and id entered by the user
function searchReadersById (readers, input) {
    const result = []
    // loops through readers
    for(let i = 0; i < readers.length; i++) {
        // if theres's a match, adds to the result array
        if((readers[i].id).includes(input)) {
            result.push(readers[i]);
        }
    }
    if (result.length === 0)
        console.log("No results. Please type id again or search for name.");
    return result
}