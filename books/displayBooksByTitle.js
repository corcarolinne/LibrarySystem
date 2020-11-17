const { title } = require('process');
const books = require('./books.json')

module.exports = displayBooksByTitle = () => {
    console.table(
        sortBooksByTitle(Object.values(books)),
        ['id', 'title', 'status', 'authors']
    );
}

function sortBooksByTitle (books) {
    let n = books.length;
    for (let i = 1; i < n; i++) {
        let current = books[i]['title'];
        let j = i-1;
        while ((j > -1) && (current < books[j]['title'])) {
            books[j+1]['title'] = books[j]['title'];
            j--;
        }
        books[j+1]['title'] = current;
    }
    return books;
}