const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

// Enter site you want to scrape
const url = 'https://www.theguardian.com/';

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        // Class names differ between websites
        $('.fc-item__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch[err => console.log(err)];

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));