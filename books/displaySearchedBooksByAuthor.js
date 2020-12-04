const { authors } = require('process');
const books = require('./books.json');
const sortBooksByAuthor = require('./sortBooksByAuthor.js');

module.exports = displaySearchedBooksByAuthor = (authorToSearch) => {
    console.table(
        searchBooksByAuthor(Object.values(books), authorToSearch),
        ['id', 'title', 'status', 'authors', 'waitingList']
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
        console.log("No results. Please type author again or search for title.");

    return result
}