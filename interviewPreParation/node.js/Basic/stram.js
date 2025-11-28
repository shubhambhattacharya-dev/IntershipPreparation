import fs from 'fs'

const read = fs.createReadStream('note.txt', {
    highWaterMark: 8
})

read.on('data', chunk => {
    console.log(chunk.toString());
})

read.on('end', () => {
    console.log('Finished reading the file.');
})

read.on('error', (err) => {
    console.error('Error reading file:', err);
})