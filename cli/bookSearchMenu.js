// this file contains the workflow of cli for search books feature

// imports
const readTitleToSearch = require('./readTitleToSearch.js');
const readAuthorToSearch = require('./readAuthorToSearch.js')

// function to execute functions depending on the choise chosen by the user
const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            // call function to read user's input to know what title to search
            console.log(`Chosen option was: ${selectedOption}`);
            const titleToSearch = readTitleToSearch();
            break;
        case '2':
            // call function to read user's input to know what title to search
            console.log(`Chosen option was: ${selectedOption}`);
            const authorToSearch = readAuthorToSearch();
            break;
        default:
            // in case user doesn't type any of the choices above
            console.log("Please type '1' or '2' to choose how to search books!");
            bookSearchMenu();
            break;
    }
}

// exports function asks user for input and reads it
module.exports =  bookSearchMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to search for a book:" + "\n" +
            "1 - Search book by title" + "\n" +
            "2 - Search book by author" + "\n",
        optionNumber => {
            // calling function to act according to user's choise
            executeNextStep(optionNumber);
        }
    )   
    return;
}
