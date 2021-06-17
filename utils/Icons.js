const url = '/assets/images/icons/'
class Icon {

    static getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const item = arr[randomIndex];

        return item;
    }
    static o1d() {
        let i = [url + "01d/109-sun.svg"]
        return i
    }
    static o1n() {
        let i = [url + "01n/087-night-clear.svg"]
        return i
    }

    static o2d(){
        let i = [
            url + "02d/059-cloud-2.svg",
            url + "02d/062-cloudy-6.svg",
            url + "02d/064-cloudy-5.svg",
            url + "02d/070-cloudy-3.svg",
            url + "02d/073-cloudy-2.svg",
            url + "02d/077-cloudy-few1.svg",
            url + "02d/078-cloudy-few.svg",
            url + "02d/106-cloud-few.svg"
        ]
        return Icon.getRandomItem(i)
    }
    static o2n() {
        
        let i = [
            url + "02n/026-cloudy-night.svg",
            url + "02n/075-cloudy-night.svg",
        ]
        return Icon.getRandomItem(i)
    }
    // use for 04d and 04n as well
    static o3dn() {
        
        let i = [
            url + "03nd/036-cloud-broken.svg",
            url + "03nd/065-cloudy-overcast.svg",
            url + "03nd/079-cloud-few-night.svg"
        ]
        return Icon.getRandomItem(i)
    }
    // use for 10n as well
    static o9dn(){
        let i = [
            url + "09nd10n/015-rain-23.svg",
            url + "09nd10n/019-rain-22.svg",
            url + "09nd10n/032-rain-17.svg",
            url + "09nd10n/052-rain-15.svg",
            url + "09nd10n/054-rain-14.svg",
            url + "09nd10n/058-rain-12-heavy.svg",
            url + "09nd10n/080-rain-11.svg",
            url + "09nd10n/081-rain-10heavy.svg",
            url + "09nd10n/084-rain-heavy.svg",
            url + "09nd10n/086-rain-light.svg",
            url + "09nd10n/099-rain-4.svg",
            url + "09nd10n/100-rain-3.svg",
            url + "09nd10n/104-rain-2.svg",
            url + "09nd10n/heavy-rain.svg",
            url + "09nd10n/rain.svg"
        ]
        return Icon.getRandomItem(i)
    }

    static o10d(){
        let i = [url + "10d/042-rain-9-day.svg"]
        return i
    }

    static o11dn(){
        let i = [
            url + "11nd/020-storm-11.svg",
            url + "11nd/048-storm-8.svg",
            url + "11nd/057-storm-7.svg",
            url + "11nd/068-storm-5.svg",
            url + "11nd/071-storm-3.svg",
            url + "11nd/083-storm-2.svg",
            url + "11nd/088-storm-1.svg",
            url + "11nd/089-storm.svg"
        ]
        return Icon.getRandomItem(i)
    }

}



module.exports=Icon;