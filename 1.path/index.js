const path = require("path");
// console.log(path.sep);
// console.log(process.env.path);
// console.log(path.delimiter);

const filepath1='public_html/home/index.js'

const myfilewhere = __filename;
console.log(myfilewhere);
console.log(__dirname);


const basename= path.basename(myfilewhere);
console.log(basename);

let basenamewithoutExt= path.basename(myfilewhere, '.js')
console.log(basenamewithoutExt);