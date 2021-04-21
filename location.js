const extIP = require("ext-ip")();
const geoip = require('geoip-lite');
// GRABS CORDS BASED OFF IP
class Location {
    static async user() {
        let response = await extIP.get().then(ip => {
            let data = geoip.lookup(ip)
            let lat = data.ll[0];
            let lon = data.ll[1];
            let city = data.city;
            let state = data.region;
            return { lat, lon, city, state }
        }, err => {
            console.log(err);
            return
        }).catch(e => {
            console.log(e)
            return
        })
        return response
    }
}


module.exports = Location;