const displaySearchedBooksByTitle = require('../books/displaySearchedBooksByTitle.js');

module.exports = readTitleToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the title you wanna search for." + "\n",
        titleToSearch => {
            console.log(`Showing results for title: ${titleToSearch}`);
            // call function to search for book
            displaySearchedBooksByTitle(titleToSearch);
            readline.close();
        }
    )   
    return;
}