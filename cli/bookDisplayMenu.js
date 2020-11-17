const displayBooksByTitle = require('../books/displayBooksByTitle.js')
const displaybooksByAuthor = require('../books/displayBooksByAuthor.js')


const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            displayBooksByTitle()
            break;
        case '2':
            displayBooksByAuthor()
            break
        default:
            break;
    }
}

module.exports = bookDisplayMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to display the books" + "\n" +
            "1 - Display books by title" + "\n" +
            "2 - Display books by author" + "\n",
        optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            executeNextStep(optionNumber);
            readline.close();
        }
    )   
    return;
}
