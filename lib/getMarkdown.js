const fs = require('fs');

let data = fs.readFileSync('小测试.md').toString();
module.exports = {
    data: data
}