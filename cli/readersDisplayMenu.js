// this file contains the workflow  of cli for display readers list feature

// imports
const readersByName = require('../readers/displayReadersByName.js');
const readersById = require('../readers/displayReadersById.js');

// funtion that calls functions according to each option chosen by user
const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            displayReadersByName()
            break;
        case '2':
            displayReadersById()
            break
        default:
            // in case user doesn't type any of the options above
            console.log("Please type '1' or '2' to choose how to search for readers!");
            readersDisplayMenu();
            break;
    }
}

// exports function that asks and reads user input
module.exports = readersDisplayMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to display the readers:" + "\n" +
            "1 - Display readers by name" + "\n" +
            "2 - Display readers by ID" + "\n",
        optionNumber => {
            console.log(`Chosen option was: ${optionNumber}`);
            executeNextStep(optionNumber);
        }
    )   
    return;
}
