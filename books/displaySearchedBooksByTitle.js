const { title } = require('process');
const books = require('./books.json');

module.exports = displaySearchedBooksByTitle = (titleToSearch) => {
    console.table(
        searchBooksByTitle(Object.values(books), titleToSearch),
        ['id', 'title', 'status', 'authors']
    );
}

function searchBooksByTitle (books, input) {
    const result = []

    for(let i = 0; i < books.length; i++) {
        if((books[i].title).toUpperCase().includes(input.toUpperCase())) {
            result.push(books[i]);
        }
    }

    if (result.length === 0)
        console.log("Target value not found in array");

    return result
}
