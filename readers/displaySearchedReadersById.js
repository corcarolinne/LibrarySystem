const { id } = require('process');
const readers = require('./readers.json');

module.exports = displaySearchedReadersById = (idToSearch) => {
    console.table(
        searchReadersById(Object.values(readers), idToSearch),
        ['id', 'first_name', 'last_name', 'email', 'address']
    );
}

function searchReadersById (readers, input) {
    const result = []
  
    for(let i = 0; i < readers.length; i++) {
        if((readers[i].id).includes(input)) {
            result.push(readers[i]);
        }
    }
    if (result.length === 0)
        console.log("No results. Please type id again or search for name.");

    return result
}