const router = require('express').Router();
const Weather = require("../weather")
const Location = require("../location")


require('dotenv').config();

router.get('/', async (req, res) => {

    // GRAB USER IP AND FETCH WEATHER FROM OPEN WEATHER
    // INCLUDED CODE WORKS LOCALLY AND ON HEROKU 
    const geoip = require('geoip-lite');
    let client = req.clientIp
    let ip = geoip.lookup(client)
    let lat;
    let lon;
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

    const data = await Weather.oneCall(lat, lon).then(res => {
        return res
    })

    const {
        cw, mw, dw, condition, hourly, hourlyExtended,
    } = data

    res.render('homepage', {
        cw, mw, dw, city, state, condition, hourly, hourlyExtended,
    })


    // ==============================================
})





module.exports = router