const { authors } = require('process');
const books = require('./books.json')
const books2 = require('./books.json')
const sortBooksByAuthor = require('./sortBooksByAuthor.js')

module.exports = displayBooksByAuthor = () => {
    console.table(
        sortBooksByAuthor(Object.values(books2)),
        ['id', 'title', 'status', 'authors']
    );
}

