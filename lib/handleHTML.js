const renderMarkdown = require('./renderMarkdown.js');

renderMarkdown.then((data) => {
    console.log(data.length);
});