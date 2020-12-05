// this file contains the workflow for the cli for the feature of display books for a specific reader

// imports
const displayBooksBorrowedForReader = require('../books/displayBooksBorrowedForReader.js')

// exports function asks user for input and reads it
module.exports = readIdToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the id of the reader you wanna search for" + "\n",
        idToSearch => {
            // validating user input by checking if it's a number
            if(isNaN(idToSearch) === false){
                // loop thru borrowings
                console.log(`Chosen id was: ${idToSearch}`);
                // call function to search for reader
                displayBooksBorrowedForReader(idToSearch);
                readline.close();
            } else {
                console.log('Please try again and type only numbers for reader id.')
                process.exit();
            }   
        }
    )   
    return;
}