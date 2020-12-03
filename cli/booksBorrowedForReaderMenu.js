const displayBooksBorrowedForReader = require('../books/displayBooksBorrowedForReader.js')
module.exports = readIdToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the id of the reader you wanna search for" + "\n",
        idToSearch => {
            console.log(`Choosen option was ${idToSearch}`);
            // call function to search for reader
            displayBooksBorrowedForReader(idToSearch);
            readline.close();
        }
    )   
    return;
}