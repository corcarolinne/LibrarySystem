const { id } = require('process');
const readers = require('./readers.json')
const sortReadersById = require('./sortReadersById.js')

module.exports = displayReadersById = () => {
    console.table(
        sortReadersById(Object.values(readers)),
        ['id', 'first_name', 'last_name', 'email', 'address']
    );
}
