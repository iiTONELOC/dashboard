const router = require('express').Router();
const Weather = require("../weather")
const Location = require("../location")
const fetch = require('node-fetch');
const News = require('../news');

require('dotenv').config();
const requestIp = require('request-ip');
// inside middleware handler

router.get('/', (req, res) => {

    // Get Current Weather off IP-

    async function oneCall() {
        let data = await News.getHeadlines().then(async data => {
            // console.log(data)
            let d = await ((data.news))
            return d

        }).then(async nD => {
            let news = nD
            const geoip = require('geoip-lite');
            let client = requestIp.getClientIp(req)
            let ip = geoip.lookup(client)
            let lat;
            let lon;
            // BELOW CODE WORKS LOCALLY AND ON HEROKU
            if (client === '::1') {
                client = await Location.user()
                lat = client.lat;
                lon = client.lon;
                city = client.city;
                state = client.state
            } else {
                city = ip.city;
                state = ip.region;
                lat = ip.ll[0];
                lon = ip.ll[1];
            }


            let units = "imperial";
            let lang = "en";
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER}&units=${units}&lang=${lang}`
            let d = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await d.json()


            // console.log(lat)
            return { data, city, state, lat, lon, news }

        })
        return data
    }

    oneCall().then(data => {
    
        /* SEPARATE AND PACKAGE CURRENT, MINUTELY, HOURLY, DAILY FORECAST */
        const cw = data.data.current
        const mw = data.data.minutely
        const hw = data.data.hourly
        const dw = data.data.daily
        const city = data.city
        const state = data.state
        const lat = data.lat
        const lon = data.lon;
        const news = data.news
        const condition = ({ ...cw.weather }[0].description).toUpperCase()
        // storage for hourly, we dont need all 48 hours right now
        // map the array, don't alter original data
        let data1 = hw.map(e => { return e });
        // empty holders
        let hourly = [];
        let hourlyExtended = [];
        // grab the first 12 hours and add it to hourly array
        for (let index = 0; index < data1.length - 36; index++) {
            const element = data1[index];
            hourly.push(element)
        }
        // Splice hourly array into 6 hour groups
       
        hourlyExtended = hourly.splice(6)
        res.render('homepage', {
            cw, mw, dw, city, state, condition, hourly, hourlyExtended, lat, lon, news
        })
        return
    }).catch(e => {
        if (e) { console.log(e) }
        return
    })



    // ==============================================
})

module.exports = router