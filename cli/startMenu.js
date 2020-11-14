const bookSearchMenu = require('./bookSearchMenu')
const readerSearchMenu = require('./readerSearchMenu')
const bookDisplayMenu = require('./bookDisplayMenu')

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
        default:
            break;
    }
}

const message = `
Select an option from the following menu and press enter:
1 - Search for a book
2 - Search for a reader
3 - Display books list
4 - Display readers list
5 - Borrow a book
6 - Return a book
7 - Display books in transit from a  specific reader
8 - Exit
`

module.exports = startMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(message,
        optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            executeNextStep(optionNumber);
        }
    )   
    return;
}
