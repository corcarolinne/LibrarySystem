const displaySearchedReadersByName = require('../readers/displaySearchedReadersByName.js');
const displaySearchedReadersById = require('../readers/displaySearchedReadersById.js');
const readNameToSearch = require('./readNameToSearch.js');
const readIdToSearch = require('./readIdToSearch.js')

const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            // call function to read user's input to know what reader to search
            console.log(`Chosen option was: ${selectedOption}`);
            const nameToSearch = readNameToSearch();
            break;
        case '2':
            // call function to read user's input to know what reader to search
            console.log(`Chosen option was: ${selectedOption}`);
            const idToSearch = readIdToSearch();
            break;
        default:
            console.log("Please type '1' or '2' to choose how to search for readers!");
            readerSearchMenu();
            break;
    }
}

module.exports =  readerSearchMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to search for a reader:" + "\n" +
            "1 - Search reader by name" + "\n" +
            "2 - Search reader by ID" + "\n",
        optionNumber => {
            executeNextStep(optionNumber);
        }
    )   
    return;
}
