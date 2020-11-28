const { id } = require('process');
const readers = require('./readers.json')

module.exports = sortReadersById = (readers) => {
    let n = readers.length;
    for (let i = 1; i < n; i++) {
        let current = readers[i];
        let j = i-1;
        while ((j > -1) && (current['id'] < readers[j]['id'])) {
            readers[j+1]= readers[j];
            j--;
        }
        readers[j+1] = current;
    }
    return readers;
}