const os = require('os');

console.log("cpu Architecture"+ os.arch());

console.log("Free memory:" + os.freemem() );

console.log("Total memory:" +os.totalmem());

console.log("Netwoork memory:" + os.networkInterfaces());