const { title } = require('process');
const readTitleToSearch = require('../cli/readTitleToSearch');
const books = require('./books.json');

module.exports = displaySearchedBooksByTitle = (titleToSearch) => {
    return console.table(
        searchBooksByTitle(Object.values(books), titleToSearch),
        ['id', 'title', 'status', 'authors', 'waitingList']
    )
}

function searchBooksByTitle (books, input) {
    const result = []

    for(let i = 0; i < books.length; i++) {
        if((books[i].title).toUpperCase().includes(input.toUpperCase())) {
            result.push(books[i]);
        }
    }

    if (result.length === 0)
        console.log("No results. Please type title again or search for author.");

    return result
}
