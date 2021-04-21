const router = require('express').Router();
const Weather = require("../weather")
const Location = require("../location")
const fetch = require('node-fetch');
require('dotenv').config();



router.get('/', (req, res) => {
    // Get Current Weather off IP
    async function oneCall() {
        let response = await Location.user().then(data => {
            return data
        }).then(async data => {
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
                // REMOVE LOG
                // console.log(data)
                return data
            })

        return response



    }
    oneCall().then(res => {
        console.log(res)
    })


    res.render('homepage', {
    });
    // ==============================================
})

module.exports = router