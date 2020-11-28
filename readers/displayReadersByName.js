const { first_name } = require('process');
const readers = require('./readers.json')
const sortReadersByName = require('./sortReadersByName.js')

module.exports = displayReadersByName = () => {
    console.table(
        sortReadersByName(Object.values(readers)),
        ['id', 'first_name', 'last_name', 'email', 'address']
    );
}
