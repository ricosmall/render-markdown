const getMarkdown = require('../lib/getMarkdown');
const expect = require('chai').expect;
const path = require('path');

describe('read file from markdown folder', () => {
    it('getPathList', () => {
        var rootPath = path.resolve() + '/test/markdown';
        var pathList = getMarkdown.getPathList(rootPath);
        var firstFileName = pathList[0].split('/').pop();
        expect(firstFileName).to.be.equal('test.md');
    });
});