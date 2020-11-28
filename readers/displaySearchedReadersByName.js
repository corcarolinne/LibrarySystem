const { first_name } = require('process');
const readers = require('./readers.json');
const searchReadersByName = require('./searchReadersByName.js')

module.exports = displaySearchedReadersByName = (nameToSearch) => {
    console.table(
        searchReadersByName(nameToSearch),
        ['id','first_name', 'last_name', 'email','address']
    )
}
