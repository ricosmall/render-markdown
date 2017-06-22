const renderMarkdown = require('../lib/renderMarkdown.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('render markdown file to html through github API', () => {
    it('renderFromGithub', () => {
        let strForRender = fs.readFileSync('./test/markdown/test.md').toString();
        console.log(strForRender)
        let result = '&lt;p&gt;hello world&lt;/p&gt;', renderResult = '';
        renderMarkdown.renderFromGithub(strForRender, (data) => {
            console.log(data);
            // expect(data).to.be.equal(result);
        });
    });
});