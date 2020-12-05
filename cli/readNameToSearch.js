// this file reads user input regarding to name of reader for search feature

// exports function that ask and reads user's input
module.exports = readNameToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the name you wanna search for." + "\n",
        nameToSearch => {
            console.log(`Showing results for name: ${nameToSearch}`);
            // call function to search for reader by name
            displaySearchedReadersByName(nameToSearch);
            readline.close();
        }
    )   
    return;
}