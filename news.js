
const fetch = require('node-fetch');


class News {
    static getUrl(data) {
        let url;
        if (!data) {
            url = `https://api.currentsapi.services/v1/latest-news`;
        }

        // let url = `http://content.guardianapis.com/editions?q=us&format=json&api-key=${key}`
        return url
    }
    static async getHeadlines() {
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
}
// News.getHeadlines().then(data => {
//     console.log(data)
// })



module.exports = News


