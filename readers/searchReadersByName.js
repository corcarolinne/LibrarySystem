const { first_name } = require('process');
const readers = require('./readers.json');

module.exports = (nameToSearch) => searchReaders(Object.values(readers), nameToSearch)

function searchReaders(readers, input) {
    const result = []
  
    for(let i = 0; i < readers.length; i++) {
        if((readers[i].first_name).toUpperCase().includes(input.toUpperCase())) {
            result.push(readers[i]);
        }
    }
    if (result.length === 0)
        console.log("No results. Please type name again or use search for id.");

    return result
}
    