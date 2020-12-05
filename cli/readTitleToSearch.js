// this file reads user input regarding to title for search feature

// imports
const displaySearchedBooksByTitle = require('../books/displaySearchedBooksByTitle.js');

// exports function that asks and reads user's input
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
            // call function to search for book by title
            displaySearchedBooksByTitle(titleToSearch);
            readline.close();
        }
    )   
    return;
}