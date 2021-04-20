const extIP = require("ext-ip")();
const geoip = require('geoip-lite');
// GRABS CORDS BASED OFF IP
class Location {
    static async user() {
    let response = await extIP.get().then(ip => {
        let data = geoip.lookup(ip)
        let lat = data.ll[0];
        let lon = data.ll[1];
        return { lat, lon }
    }, err => {
        console.error(err);
        return
    }).catch(e => {
        console.log(e)
        return
    })
    console.log(response)
    return response
    }
}

Location.user();