const displaySearchedBooksByAuthor = require('../books/displaySearchedBooksByAuthor.js')

module.exports = readAuthorToSearch = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the author you wanna search for." + "\n",
        authorToSearch => {
            console.log(`Choosen author was: ${authorToSearch}`);
            // call function to search for book
            displaySearchedBooksByAuthor(authorToSearch);
            readline.close();
        }
    )   
    return;
}