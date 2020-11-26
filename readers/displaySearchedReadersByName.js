const { Console } = require('console');
const { first_name } = require('process');
const readers = require('./readers.json');

module.exports = displaySearchedReadersByName = (nameToSearch) => {
    console.table(
        searchReadersByName(Object.values(readers), nameToSearch),
        ['id', 'first_name', 'last_name', 'email', 'address']
    );
}

function searchReadersByName (readers, input) {
    const result = []
  
    for(let i = 0; i < readers.length; i++) {
        if((readers[i].first_name).toUpperCase().includes(input.toUpperCase())) {
            result.push(readers[i]);
            console.log('test')
        }
    }
    if (result.length === 0)
        console.log("Target value not found in array");

    return result
}