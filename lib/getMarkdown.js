const fs = require('fs');
const path = require('path');

// let rootPath = path.resolve().split('/').slice(0, -1).join('/') + '/markdown';

function getPathList(dir) {
    let list = [];

    let _travel = (dir, callback) => {
        fs.readdirSync(dir).forEach((file) => {
            var pathname = path.join(dir, file);
            if (fs.statSync(pathname).isDirectory()) {
                _travel(pathname);
            } else {
                callback(pathname);
            }
        });
    };

    let _addToList = (pathname) => {
        /\.md$/.test(pathname) && list.push(pathname);
    };

    _travel(dir, _addToList);

    return list;
}

module.exports = {
    getPathList: getPathList
}