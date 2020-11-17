const { authors } = require('process');
const books = require('./books.json')

module.exports = displayBooksByAuthor = () => {
    console.table(
        sortBooksByAuthor(Object.values(books)),
        ['id', 'title', 'status', 'authors']
    );
}

function sortBooksByAuthor (books) {
    let n = books.length;
    for (let i = 1; i < n; i++) {
        let current = books[i];
        let j = i-1;
        while ((j > -1) && (current['authors'] < books[j]['authors'])) {
            books[j+1]= books[j];
            j--;
        }
        books[j+1] = current;
    }
    return books;
}