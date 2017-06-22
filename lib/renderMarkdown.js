const https = require('https');
const data = require('./getMarkdown.js').data;

let _renderFromGithub = (data, callback) => {
    let postData = JSON.stringify({text: data}),
        options = {
            hostname: 'api.github.com',
            port: 443,
            path: '/markdown',
            method: 'POST',
            headers: {
                'user-agent': 'NodeJS HTTP Client from Gaoxing'
            }
        },
        resText = '';
    
    let req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        // console.log('headers:', res.headers);

        res.on('data', (d) => {
            resText += d;
        }).on('end', () => {
            callback(resText);
        });
    }).on('error', (e) => {
        console.error(e);
    });

    req.write(postData);
    req.end();
};

let renderMarkdown = new Promise((resolve, reject) => {
    _renderFromGithub(data, resolve);
});

module.exports = renderMarkdown;
