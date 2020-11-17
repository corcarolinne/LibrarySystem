const displaySearchedBooksByTitle = require('../books/displaySearchedBooksByTitle.js');
const readSearchInput = require('./readSearchInput.js')

const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            // call function to read user's input to know what title to search
            const titleToSearch = readSearchInput();
            break;
        default:
            break;
    }
}

module.exports =  bookSearchMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to search for a book" + "\n" +
            "1 - Search book by title" + "\n" +
            "2 - Search book by author" + "\n",
        optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            executeNextStep(optionNumber);
        }
    )   
    return;
}
