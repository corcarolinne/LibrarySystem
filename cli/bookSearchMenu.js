
const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            // executar funcao que eh pra abrir no option 1
            break;
    
        default:
            break;
    }
}

module.exports =  bookSearchMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to search for a book" + "\n" +
            "1 - Display books by title" + "\n" +
            "2 - Display books by author",
        optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            executeNextStep(optionNumber);
            readline.close();
        }
    )   
    return;
}
