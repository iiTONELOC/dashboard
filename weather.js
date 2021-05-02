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
                        return data
                    })
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
                    const cw = data.current
                    const mw = data.minutely
                    const hw = data.hourly
                    const dw = data.daily
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

                    return {
                        cw: cw,
                        mw: mw,
                        hw: hw,
                        dw: dw,
                        condition: condition,
                        hourly: hourly,
                        hourlyExtended: hourlyExtended
                    }
                }).catch(e => {
                    console.log(e)
                })
            return response
        }
    }


    // RETURNS WEATHER DATA BY ZIP SEARCH
    static async dailyZip(zip) {
        require('dotenv').config();
        let zipCode = zip;
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${process.env.WEATHER}`
       let response = await fetch(url, {
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
                    // console.log(res)
                    return (res)
                })
            }).catch(e => {
                console.log(e)
            })
            return response
    }


    // RETURNS WEATHER INFO BY CITY NAME
    static async dailyCity(data) {
       
      
        require('dotenv').config();
       
        let city = data.split(",")[0]
        let country = data.split(",")[2]
        let state = data.split(",")[1]
        if (country === "undefined" || !country) {
            country = 'us';
        }
        if (!state || state === "undefined") {
            state = '';
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${process.env.WEATHER}`
       let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(async cityData => {
                // console.log(cityData)
                let lon = cityData.coord.lon;
                let lat = cityData.coord.lat;
               let response = Weather.oneCall(lat, lon).then(res => {
                    return res
                })
                return response
            }).catch(e => {
                console.log(e)
            })

            return response
    }

}


module.exports = Weather