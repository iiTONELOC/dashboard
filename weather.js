const fetch = require('node-fetch');
function getWeather(lat, lon, exclude, units, lang) {

    return {
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}&units=${units}&lang=${lang}`,
        async getDailyWeather() {
            let response = await fetch({ url }, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(res=>{
                res.json()
            })
            .then(data =>{
                console.log(data)
            })
        }
    }
}

module.exports = getWeather