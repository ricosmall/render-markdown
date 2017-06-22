const fs = require('fs');
const renderMarkdown = require('./lib/renderMarkdown.js');

let str = fs.readFileSync('./test/markdown/test.md').toString();
renderMarkdown.renderFromGithub(str, (res) => {
    console.log(res);
});