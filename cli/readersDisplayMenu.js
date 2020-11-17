const readersByName = require('../readers/displayReadersByName.js');
const readersById = require('../readers/displayReadersById.js');


const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            displayReadersByName()
            break;
        case '2':
            displayReadersById()
            break
        default:
            break;
    }
}

module.exports = readersDisplayMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to display the readers" + "\n" +
            "1 - Display readers by name" + "\n" +
            "2 - Display readers by ID" + "\n",
        optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            executeNextStep(optionNumber);
            readline.close();
        }
    )   
    return;
}
