// this file reads user input regarding to author for search feature

// imports
const displaySearchedBooksByAuthor = require('../books/displaySearchedBooksByAuthor.js')

// exports function to ask and read user's input
module.exports = readAuthorToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the author you wanna search for." + "\n",
        authorToSearch => {
            console.log(`Showing results for author: ${authorToSearch}`);
            // call function to search for book passing author to search for
            displaySearchedBooksByAuthor(authorToSearch);
            readline.close();
        }
    )   
    return;
}