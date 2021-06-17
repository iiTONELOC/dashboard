const router = require('express').Router();
const Weather = require("../weather")
const Location = require("../location")


require('dotenv').config();

router.get('/', async (req, res) => {

    // GRABS USER IP AUTOMAGICALLY
    const geoip = require('geoip-lite');
    // GRAB USER IP OFF OF REQUEST
    let client = req.clientIp
    // GRABS GEO-DATA FROM IP IF DEPLOYED
    let ip = geoip.lookup(client)
    let lat;
    let lon;
    // IF LOCAL
    if (client === '::1' || client === '::ffff:127.0.0.1') {
        client = await Location.user()
        lat = client.lat;
        lon = client.lon;
        city = client.city;
        state = client.state
    } else {
        // IF DEPLOYED
        city = ip.city;
        state = ip.region;
        lat = ip.ll[0];
        lon = ip.ll[1];
    }
    /* 
    GRABS WEATHER DATA FROM OPEN WEATHER's ONE CALL API
    Weather.oneCall is a class method that fetches, returns, and packages the data
    */
    const data = await Weather.oneCall(lat, lon).then(res => {
        return res
    })
    // DESTRUCTURE PACKAGED DATA
    const {
        cw, mw, dw, condition, hourly, hourlyExtended,alerts
    } = data
    // RETURN RESPONSE AND RENDER PAGE
    res.render('homepage', {
        cw, mw, dw, city, state, condition, hourly, hourlyExtended, alerts
    })
})
// weather search by city,state or city,country
router.get('/search/:query', async (req, res) => {

    const search = req.params.query
    let city = search.split(",")[0].trim()
    let state = search.split(",")[1]
    // console.log(city,state)
    const weather = await Weather.dailyCity(search).then(data=>{
        return data
    })
    const {
        cw, mw, dw, condition, hourly, hourlyExtended,alerts
    } = weather
    return res.render(`homepage`, {
        cw, mw, dw, city, state, condition, hourly, hourlyExtended, alerts
    })
    // ==============================================
})





module.exports = router