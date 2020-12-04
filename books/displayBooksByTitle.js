const { title } = require('process');
const books = require('./books.json')
const sortBooksByTitle = require('./sortBooksByTitle.js')

module.exports = displayBooksByTitle = () => {
    console.log('Showing books by title:');
    console.table(
        sortBooksByTitle(Object.values(books)),
        ['id', 'title', 'status', 'authors', 'waitingList']
    );
    process.exit();
}

