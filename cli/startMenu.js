// this file contains the first and main menu of and its workflow

// imports
const bookSearchMenu = require('./bookSearchMenu')
const readerSearchMenu = require('./readerSearchMenu')
const bookDisplayMenu = require('./bookDisplayMenu')
const readersDisplayMenu = require('./readersDisplayMenu')
const borrowBookMenu = require('./borrowBookMenu')
const returnBookMenu = require('./returnBookMenu')
const booksBorrowedForReaderMenu = require('./booksBorrowedForReaderMenu')

// function to call other functions depending on user's choice
const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            bookSearchMenu()
            break;
        case '2':
            readerSearchMenu();
            break;
        case '3':
            bookDisplayMenu();
            break
        case '4':
            readersDisplayMenu();
            break
        case '5':
            borrowBookMenu();
            break
        case '6':
            returnBookMenu();
            break
        case '7':
            booksBorrowedForReaderMenu();
            break
        case '8':
            // exit program
            process.exit();
            break
        default:
            // in case user doesn't type any of the options above
            console.log('Please type a number from 1 to 8 to choose an option!');
            startMenu();
            break;
    }
}

// main menu
const message = `
Select an option from the following menu and press enter:
1 - Search for a book
2 - Search for a reader
3 - Display books list
4 - Display readers list
5 - Borrow a book
6 - Return a book
7 - Display books in transit for a specific reader
8 - Exit
`

// exports function to ask and read user's input
module.exports = startMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(message,
        optionNumber => {
            console.log(`Chosen option was: ${optionNumber}`);
            executeNextStep(optionNumber);
        }
    )   
    return;
}
