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

    for(let i = 0; i < books.length; i++) {
        if((books[i].authors).toUpperCase().includes(input.toUpperCase())) {
            result.push(books[i]);
        }
    }
    if (result.length === 0)
        console.log("Target value not found in array");

    return result
}
