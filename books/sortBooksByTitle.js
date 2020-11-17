const { title } = require('process');
const books = require('./books.json')

module.exports = sortBooksByTitle = (books) => {
    let n = books.length;
    for (let i = 1; i < n; i++) {
        let current = books[i];
        let j = i-1;
        while ((j > -1) && (current['title'] < books[j]['title'])) {
            books[j+1] = books[j];
            j--;
        }
        books[j+1] = current;
    }
    return books;
}