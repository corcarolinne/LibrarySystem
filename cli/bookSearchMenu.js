const readTitleToSearch = require('./readTitleToSearch.js');
const readAuthorToSearch = require('./readAuthorToSearch.js')

const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            // call function to read user's input to know what title to search
            console.log(`Choosen option was: ${selectedOption}`);
            const titleToSearch = readTitleToSearch();
            break;
        case '2':
            // call function to read user's input to know what title to search
            console.log(`Choosen option was: ${selectedOption}`);
            const authorToSearch = readAuthorToSearch();
            break;
        default:
            console.log("Please type '1' or '2' to choose how to search books!");
            bookSearchMenu();
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
        "Please choose one of the options to search for a book:" + "\n" +
            "1 - Search book by title" + "\n" +
            "2 - Search book by author" + "\n",
        optionNumber => {
            executeNextStep(optionNumber);
        }
    )   
    return;
}
