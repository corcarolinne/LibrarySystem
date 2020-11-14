const books = require('./books.json')

module.exports = displayBooksByTitle = () => {
    console.table(
        Object.values(books)
        .sort((book1, book2) => {
            if(book1.title < book2.title) { return -1; }
            if(book1.title > book2.title) { return 1; }
            return 0;
        }),
        ['id', 'title', 'status', 'authors']
    )
}
