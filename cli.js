// command line interface

const { read } = require('fs');


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
        "7 - Display books in transit from a specific reader" + "\n" +
        "8 - Exit"
    );
    readSelectedOptionMenu("1");
    return;
}
displayOptionsMenu();

function readSelectedOptionMenu(menuNumber) {
    // reading user's answer for first menu
    readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    if(menuNumber === "1") {
        readline.question("", optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            displaySecondMenu(optionNumber);
            
        })   
    }
    else if(menuNumber === "2") {
        readline.question("", optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            readline.close();
        })   
    }
}

function displaySecondMenu(optionNumber) {
    // depending on user's answer
    if(optionNumber === '1') {
        console.log("Please choose one of the options to search for a book" + "\n" +
            "1 - Display books by title" + "\n" +
            "2 - Display books by author"
    );
    } else if(optionNumber === '2') {
        console.log("Please choose one of the options to search for a reader" + "\n" +
            "1 - Display readers by name" + "\n" +
            "2 - Display readers by ID"
    );
    } else if(optionNumber === '3') {
        console.log("Please choose one of the options to display the books" + "\n" +
            "1 - Display books by title" + "\n" +
            "2 - Display books by author"
        );
        // read user's input
        readSelectedOptionMenu("2");
        // if/else depending on answer
    } else if(optionNumber === '4') {
        console.log("Please choose one of the options to display the readers" + "\n" +
            "1 - Display readers by name" + "\n" +
            "2 - Display readers by ID"
    );
    } else if(optionNumber === '5') {
        console.log("Second menu for borrow book feature");
    } else if(optionNumber === '6') {
        console.log("Second menu for return a book feature");
    } else if(optionNumber === '7') {
        console.log("Second menu for display in transit books feature");
    } else if(optionNumber === '8') {
        console.log("Bye!");
        return process.exit();
    }
}


