// this file contains the workflow of cli for display books feature

// imports
const displayBooksByTitle = require('../books/displayBooksByTitle.js')
const displaybooksByAuthor = require('../books/displayBooksByAuthor.js')

// function to execute functions depending on the choise chosen by the user
const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            console.log(`Chosen option was: ${selectedOption}`);
            displayBooksByTitle()
            break;
        case '2':
            console.log(`Chosen option was: ${selectedOption}`);
            displayBooksByAuthor()
            break
        default:
            // in case user doesn't type any of the choices above
            console.log("Please type '1' or '2' to choose how to search books!");
            bookDisplayMenu();
            break
    }
}

// exports function asks user for input and reads it
module.exports = bookDisplayMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to display the books:" + "\n" +
            "1 - Display books by title" + "\n" +
            "2 - Display books by author" + "\n",
        optionNumber => {
            // calling function to act according to user's choise
            executeNextStep(optionNumber);
        }
    )   
    return;
}
