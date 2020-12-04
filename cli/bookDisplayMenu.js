const displayBooksByTitle = require('../books/displayBooksByTitle.js')
const displaybooksByAuthor = require('../books/displayBooksByAuthor.js')


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
            console.log("Please type '1' or '2' to choose how to search books!");
            bookDisplayMenu();
            break
    }
}

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
            executeNextStep(optionNumber);
            //readline.close();
        }
    )   
    return;
}
