const displaySearchedBooksByTitle = require('../books/displaySearchedBooksByTitle.js');
const displaySearchedBooksByAuthor = require('../books/displaySearchedBooksByAuthor.js');
const readTitleToSearch = require('./readTitleToSearch.js');
const readAuthorToSearch = require('./readAuthorToSearch.js')

const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            // call function to read user's input to know what title to search
            const titleToSearch = readTitleToSearch();
            break;
        case '2':
            // call function to read user's input to know what title to search
            const authorToSearch = readAuthorToSearch();
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
