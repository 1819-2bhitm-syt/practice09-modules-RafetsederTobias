
const readline = require('readline');
const fs = require('fs');


const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];
rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines) {
        console.log(decompress(line));
    }
});

function decompress(line) {
let first = line.charAt(0);
let length =  parseInt(line.substring(1, line.length));
let package = "";

for (i=0;i<length;i++) {
    package += first;
}

return package;



}