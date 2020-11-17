const { first_name } = require('process');
const readers = require('./readers.json')

module.exports = displayReadersByName = () => {
    console.table(
        sortReadersByName(Object.values(readers)),
        ['id', 'first_name', 'last_name', 'address']
    );
}

function sortReadersByName (readers) {
    let n = readers.length;
    for (let i = 1; i < n; i++) {
        let current = readers[i];
        let j = i-1;
        while ((j > -1) && (current['first_name'] < readers[j]['first_name'])) {
            readers[j+1]= readers[j];
            j--;
        }
        readers[j+1] = current;
    }
    return readers;
}