
const executeNextStep = (selectedOption) => {
    switch (selectedOption) {
        case '1':
            // executar funcao que eh pra abrir no option 1
            break;
    
        default:
            break;
    }
}

module.exports =  readerSearchMenu = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    readline.question(
        "Please choose one of the options to search for a reader" + "\n" +
            "1 - Display readers by name" + "\n" +
            "2 - Display readers by ID",
        optionNumber => {
            console.log(`Choosen option was ${optionNumber}`);
            executeNextStep(optionNumber);
            readline.close();
        }
    )   
    return;
}
