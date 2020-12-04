const { title } = require('process');
const books = require('./books.json');

module.exports = (titleToSearch) => searchBooks(Object.values(books), titleToSearch)

function searchBooks(books, input) {
    const result = []
  
    for(let i = 0; i < books.length; i++) {
        if((books[i].title).toUpperCase().includes(input.toUpperCase())) {
            result.push(books[i]);
        }
    }

    return result
}