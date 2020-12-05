// this file contains logic for search readers by name feature 

// imports
const { first_name } = require('process');
const readers = require('./readers.json');

// exports function that calls function that receives readers data and user input
module.exports = (nameToSearch) => searchReaders(Object.values(readers), nameToSearch)

// function to search readers
function searchReaders(readers, input) {
    // array for save readers found
    const result = []
    // loop through readers 
    for(let i = 0; i < readers.length; i++) {
        // if there's a match, add reader to the result array
        if((readers[i].first_name).toUpperCase().includes(input.toUpperCase())) {
            result.push(readers[i]);
        }
    }
    if (result.length === 0)
        console.log("No results. Please type name again or use search for id.");
    return result
}
    