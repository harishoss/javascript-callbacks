// http requests with async/await

const https = require('https');
const API_KEY = '27d8e951e73c4f4f8257613f256be3af';

const options = {
    headers: {
        'X-Api-Key': API_KEY,
    },
}


async function requestsAsync(url) {
    let prom = await new Promise((resolve, reject) => {
        https.get(url, options, (res) => {

            let body = [];
            res.on('data', (chunk) => body.push(chunk));
            res.on('end', () => resolve(JSON.parse(Buffer.concat(body))));

        }).on('error', (error) => reject(error));
    })
    // console.log('is await working ? ');
    return prom;
}

requestsAsync('https://newsapi.org/v2/top-headlines?country=us')
    .then(body => body.articles.forEach(article => console.log(article.source.name)))
    .catch(error => console.log(error));