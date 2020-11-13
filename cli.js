// command line interface


// variables
let optionNumber;

// function to offer menu options to the user
function displayOptionsMenu() {
    console.log("Select an option from the following menu and press enter:" + "\n" +
        "1 - Search for a book" + "\n" +
        "2 - Search for a reader" + "\n" +
        "3 - Display books list" + "\n" +
        "4 - Display readers list" + "\n" +
        "5 - Borrow a book" + "\n" +
        "6 - Return a book" + "\n" +
        "7 - Display books in transit" + "\n" +
        "8 - Exit"
    );
    readSelectedOption();
    return;
}
displayOptionsMenu();

function readSelectedOption() {
    // reading user's answer from menu
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question("", optionNumber => {
        console.log(`Choosen option was ${optionNumber}`);
        displaySecondMenu(optionNumber);
        readline.close();
    })
}

function displaySecondMenu(optionNumber) {
    console.log(typeof optionNumber)
    // depending on user's answer
    if(optionNumber === '3') {
        console.log("Please choose one of the options to display the books" + "\n" +
            "1 - Display books by title" + "\n" +
            "2 - Display books by author"
        );
    }
}


