const books = require('../books/displayBooksByTitle.js')

const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            displayBooksByTitle()
            break;
        case '2':
            //chamar funcao que display
            console.log('display  based on author')
            break
        case '3':
            //chamar funcao que display pelos dois casos
            console.log('display  based on both')
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
            "2 - Display books by author" + "\n" +
            "3 - Display books by title AND author" + "+\n",
        optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            executeNextStep(optionNumber);
            readline.close();
        }
    )   
    return;
}
