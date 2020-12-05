// this file reads user input regarding to readerId, which is used for search feature

// exports function to ask and read user's input
module.exports = readNameToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the id you wanna search for." + "\n",
        idToSearch => {
            console.log(`Showing results for id: ${idToSearch}`);
            // call function to search for reader by id
            displaySearchedReadersById(idToSearch);
            readline.close();
        }
    )   
    return;
}