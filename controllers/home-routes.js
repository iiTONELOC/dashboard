const router = require('express').Router();
const Weather = require("../weather")
const Location = require("../location")
const fetch = require('node-fetch');
require('dotenv').config();



router.get('/', (req, res) => {
    let city;
    let state;
    // Get Current Weather off IP
    async function oneCall() {
        let response = await Location.user().then(data => {

            return data
        }).then(async data => {
            city = data.city;
            state = data.state;
            let units = "imperial";
            let lang = "en";
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&appid=${process.env.WEATHER}&units=${units}&lang=${lang}`
            let weatherData = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            return weatherData
        })
            .then(res => res.json())
            .then((data) => {
                return { data, city, state }
            })
        return response
    }

    oneCall().then(data => {
        console.log(data)
        // /* SEPARATE AND PACKAGE CURRENT, MINUTELY, HOURLY, DAILY FORECAST */
        // const cw = data.data.current
        // const mw = data.data.minutely
        // const hw = data.data.hourly
        // const dw = data.data.daily
        // const city = data.city
        // const state = data.state
        // const condition = ({ ...cw.weather }[0].description).toUpperCase()
        // // storage for hourly, we dont need all 48 hours right now
        // // map the array, don't alter original data
        // let data1 = hw.map(e=>{return e});
        // // empty holders
        // let hourly =[];
        // let hourlyExtended = [];
        // // grab the first 12 hours and add it to hourly array
        // for (let index = 0; index < data1.length-36; index++) {
        //     const element = data1[index];
        //     hourly.push(element)
        // }
        // // Splice hourly array into 6 hour groups
        // hourlyExtended=hourly.splice(6)
        // // console.log(dw.weather)
        res.render('homepage', {
            // cw, mw, dw, city, state, condition, hourly, hourlyExtended
        });
        return
    })



    // ==============================================
})

module.exports = router