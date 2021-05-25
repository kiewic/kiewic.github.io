'use strict';
const http = require('https');

function sendRequest(options) {
    return new Promise((resolve, reject) => {
        const request = http.get(options, function (response) {
            if (response.statusCode !== 200) {
                console.log(options.path);
                console.log('STATUS: ' + response.statusCode + ' ' + response.statusMessage);
                console.log('HEADERS: ' + JSON.stringify(response.headers));
                console.log();
            }

            // Buffer the body entirely for processing as a whole.
            let bodyChunks = [];
            response.on('data', function (chunk) {
                bodyChunks.push(chunk);
            }).on('end', function () {
                let body = Buffer.concat(bodyChunks);
                if (response.headers['content-type'] === 'application/json; charset=utf-8') {
                    let parsedBody = JSON.parse(body);
                    // for (const key of Object.keys(parsedBody)) {
                    //     console.log(`${key}:`, parsedBody[key]);
                    // }
                    resolve(parsedBody);
                }
                else {
                    resolve(body);
                }
            })
        });
        request.on('error', function (e) {
            console.log('ERROR: ' + e.message);
            reject(e.message);
        });
    });
}

function removeScript(content) {
    return content.replace('<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>', '')
        .trim();
}

const urls = JSON.parse("[\"/jwynia/status/1395021917401268226\",\"/lisapjackson/status/1385217074851577858\",\"/angular/status/1394771840011284490\",\"/mgechev/status/1394510633685630976\",\"/aweary/status/1394339083573411849\",\"/aweary/status/1394339083573411849/photo/1\",\"/mgechev/status/1394148254238003200\",\"/angular/status/1391822781327855616\",\"/mgechev/status/1391973892948996098\",\"/mgechev/status/1391973892948996098/photo/1\"]");

(async function() {
    let count = 0;
    for (const url of urls) {
        const urlEncoded = encodeURIComponent(`https://twitter.com${url}`);
        const options = {
            host: 'publish.twitter.com',
            path: `/oembed?hide_thread=true&url=${urlEncoded}`,
        };
        const result = await sendRequest(options);
        if (result.html) {
            console.log(removeScript(result.html));
        }

        if (++count == 300) {
            break;
        }
    }
})();
