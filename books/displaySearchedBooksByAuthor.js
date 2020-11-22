const { authors } = require('process');
const books = require('./books.json');
const sortBooksByAuthor = require('./sortBooksByAuthor.js');

module.exports = displaySearchedBooksByAuthor = (authorToSearch) => {
    console.table(
        searchBooksByAuthor(Object.values(books), authorToSearch),
        ['id', 'title', 'status', 'authors']
    );
}

function searchBooksByAuthor (books, input) {
    const result = []

    return console.log('test');
}
