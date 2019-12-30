// http requests with promises


const https = require('https');
const API_KEY = '27d8e951e73c4f4f8257613f256be3af';

const options = {
    headers: {
        'X-Api-Key': API_KEY,
    },
}

const requestPromise = function (url) {
    return new Promise((resolve, reject) => {
        let req = https.get(url, options, (res) => {

            let body = [];
            res.on('data', (chunk) => {
                body.push(chunk);
            });

            res.on('end', () => {
                // console.log(Buffer.concat(body).toString())
                let ss = JSON.parse(Buffer.concat(body));
                resolve(ss);

            });
        });
        req.on('error', (error) => {
            reject(error);
        })
    });
}

requestPromise('https://newsapi.org/v2/top-headlines?country=us')
    .then((data) => {
        data.articles.forEach( article => console.log(article.source.name))
    })
    .catch((error) => console.error(error))
