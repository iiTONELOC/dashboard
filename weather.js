const fetch = require('node-fetch');
const Location = require("./location");


class Weather {
    /*
    GRABS CURRENT WEATHER DATA OFF OF USERS IP
    METHOD FOR RETRIEVING CURRENT WEATHER STATS FROM THE ONE CALL API
    */
    static async oneCall(lat, lon) {
        if (!lat || !lon) {
            let response = await Location.user().then(res => {
                return res
            }).then(data => {
                // MOVE THIS LATER TO CONFIG FILE
                require('dotenv').config();
                // DO NOT CHANGE THESE VALUES
                let lat = data.lat;
                let lon = data.lon;

                /*
                ====================================================
                UNITS ARE HARDCODED CAN BE CHANGED TO THE FOLLOWING:
                'standard'-K
                'metric'- C
                ====================================================
                LANGUAGE CAN BE CHANGED. TO SEE ALL OPTIONS VISIT:
                https://openweathermap.org/api/one-call-api
                ====================================================
                OPTIONS CAN BE EXCLUDED
                'current'
                'minutely'
                'hourly'
                'daily'
                'alerts'
                
                *ADD TO VARIABLES*
                let exclude ="{
                    exclusions listed above separated by commas, 
                    remove brackets
                }"
                *ADD BELOW CODE TO URL AFTER ${lon} AND BEFORE &appid=*
                &exclude=${exclude}
                ===================================================
                DATA INCLUDES
                _______________
                -Current weather
                -Minute forecast for 1 hour
                -Hourly forecast for 48 hours
                -Daily forecast for 7 days   
                -National weather alerts 
                */

                let units = "imperial";
                let lang = "en";
                let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER}&units=${units}&lang=${lang}`
                fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                    .then(res => res.json())
                    .then((data) => {
                        // REMOVE LOG
                        // console.log(data)
                        return data
                    }).catch(e => {
                        console.log(e)
                    })
            }).catch(e => {
                console.log(e)
                return
            })
            return response
        } else {
            require('dotenv').config();
            // DO NOT CHANGE THESE VALUES
            let units = "imperial";
            let lang = "en";
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER}&units=${units}&lang=${lang}`
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(res => res.json())
                .then((data) => {
                    // REMOVE LOG
                    // console.log(data)
                    return data
                }).catch(e => {
                    console.log(e)
                })
            return response
        }

    }
    // RETURNS WEATHER DATA BY ZIP SEARCH
    static dailyZip(zip) {
        require('dotenv').config();
        let zipCode = zip;
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${process.env.WEATHER}`
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(async (zipData) => {
                // REMOVE LOG
                let lon = zipData.coord.lon;
                let lat = zipData.coord.lat;
                Weather.oneCall(lat, lon).then(res => {
                    // REMOVE LOG
                    console.log(res)
                    return(res)
                })
            }).catch(e => {
                console.log(e)
            })
    }
    // RETURNS WEATHER INFO BY CITY NAME
    static dailyCity(city, state, country) {
        require('dotenv').config();
        if (!country) {
            country = 'us';
        }
        if(!state){
            state = '';
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${process.env.WEATHER}`
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(async cityData => {
                let lon = cityData.coord.lon;
                let lat = cityData.coord.lat;
                Weather.oneCall(lat, lon).then(res => {
                    console.log(res)
                    return res
                })
            }).catch(e => {
                console.log(e)
            })
    }
}

Weather.dailyCity("london",false,"uk")
module.exports = Weather