const { title } = require('process');
const books = require('./books.json')
const sortBooksByTitle = require('./sortBooksByTitle.js')

module.exports = displayBooksByTitle = () => {
    console.table(
        sortBooksByTitle(Object.values(books)),
        ['id', 'title', 'status', 'authors']
    );
}

