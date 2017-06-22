const fs = require('fs');
const marked = require('marked');

let headerTop = fs.readFileSync('./lib/components/header-top.part').toString(),
    headerBottom = fs.readFileSync('./lib/components/header-bottom.part').toString(),
    footer = fs.readFileSync('./lib/components/footer.part').toString();

let renderContent = marked(fs.readFileSync('./markdown/JavaScript开发规范.md').toString()),
    title = 'JavaScript开发规范';

let html = headerTop + title + headerBottom + renderContent + footer;
fs.writeFileSync('exam.html', html, (err) => {
    console.error(err);
});
