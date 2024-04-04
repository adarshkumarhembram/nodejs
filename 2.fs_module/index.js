const fs = require('fs');

console.log('Read start ');
// Asynchronous way to read file
fs.readFile('index.txt', function(err,data) {
    if(err){
        console.log('Error:',err);
        return err;
    }
    console.log('Data:',data.toString());
    console.log('Read end');
    return data;
});

console.log('other work');

// synchronous way

var data = fs.readFileSync('index.txt');
console.log('Data:',data.toString());
console.log('Read End');
console.log('Other strff');