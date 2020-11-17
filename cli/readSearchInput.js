module.exports = readSearchInput = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please type the title you wanna search for" + "\n",
        titleToSearch => {
            console.log(`Choosen option was ${titleToSearch}`);
            // call function to search for book
            displaySearchedBooksByTitle(titleToSearch);
            readline.close();
        }
    )   
    return;
}