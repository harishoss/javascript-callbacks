// basic, plain requests.


const https = require('https');
const API_KEY = '27d8e951e73c4f4f8257613f256be3af';

const options = {
    headers: {
        'X-Api-Key': API_KEY,
    },
}


const req = https.get('https://dfdfnewsapi.org/v2/top-headlines?country=us', options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)
    let body = [];
    res.on('data', (chunk) => body.push(chunk))


    res.on('end', () => {
        let ss = JSON.parse(Buffer.concat(body));
        ss.articles.forEach(article => console.log(article.source.name));
    });

})

req.on('error', (error) => console.error(error))
