const renderMarkdown = require('./renderMarkdown.js');
const fs = require('fs');

let _getStringFromFile = file => fs.readFileSync(file).toString();
let headerTop = _getStringFromFile('./components/header-top.part');
let headerBottom = _getStringFromFile('./components/header-bottom.part');
let footer = _getStringFromFile('./components/footer.part');

renderMarkdown.then((data) => {
    console.log(data.length);
});