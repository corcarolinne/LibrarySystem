module.exports = readNameToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the name you wanna search for" + "\n",
        nameToSearch => {
            console.log(`Choosen option was ${nameToSearch}`);
            // call function to search for reader
            displaySearchedReadersByName(nameToSearch);
            readline.close();
        }
    )   
    return;
}