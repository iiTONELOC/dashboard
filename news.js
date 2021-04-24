
const fetch = require('node-fetch');
const fs = require('fs')


class News {
    static getUrl(data) {
        let url;
        if (!data) {
            url = `https://api.currentsapi.services/v1/latest-news`;
        }

        // let url = `http://content.guardianapis.com/editions?q=us&format=json&api-key=${key}`
        return url
    }
    static async getStories() {
        require('dotenv').config();
        let key = process.env.NEWS
        let stories;
        let url = News.getUrl()
        console.log(url)
        let response = fetch(url, {
            method: "GET",
            headers: {
                "Authorization": key,
                "cache-control": "no-cache"
            },
        })
            .then(res => res.json())
            .then((data) => {

                return stories = data
            })
        return response


    }

    static async updateHeadlines() {
        require('dotenv').config();
        let key = process.env.NEWS1
        let url = "https://newsapi.org/v2/top-headlines?country=us"
        let response = fetch(url, {
            method: "GET",
            headers: {
                "X-Api-Key": key,

            },
        })
            .then(res => res.json())
            .then((json) => {
               
                const data = JSON.stringify(json);
                fs.writeFileSync(`./data/news.json`, data, 'utf8', (err) => {
                    if (err) {
                        return console.log(`Error writing file: ${err}`);
                    } else {
                        return console.log(`News File is written successfully!`);
                    }
                });
                return
            })
        return response
    }

    static  async getNewsJSON() {
        let response = await JSON.parse(fs.readFileSync(`./data/news.json`, 'utf8',));
        return response;
    };
}


// News.getNewsJSON().then(data => {
//     console.log(data)
// })



module.exports = News


