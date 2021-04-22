class Icon {

    static getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const item = arr[randomIndex];

        return item;
    }
    static o1d() {
        let i = ["assets/images/icons/01d/109-sun.svg"]
        return i
    }
    static o1n() {
        let i = ["assets/images/icons/01n/087-night-clear.svg"]
        return i
    }

    static o2d(){
        let i = [
            "assets/images/icons/02d/059-cloud-2.svg",
            "assets/images/icons/02d/062-cloudy-6.svg",
            "assets/images/icons/02d/064-cloudy-5.svg",
            "assets/images/icons/02d/070-cloudy-3.svg",
            "assets/images/icons/02d/073-cloudy-2.svg",
            "assets/images/icons/02d/077-cloudy-few1.svg",
            "assets/images/icons/02d/078-cloudy-few.svg",
            "assets/images/icons/02d/106-cloud-few.svg"
        ]
        return Icon.getRandomItem(i)
    }
    static o2n() {
        
        let i = [
            "assets/images/icons/02n/026-cloudy-night.svg",
            "assets/images/icons/02n/075-cloudy-night.svg",
        ]
        return Icon.getRandomItem(i)
    }
    // use for 04d and 04n as well
    static o3dn() {
        
        let i = [
            "assets/images/icons/03nd/036-cloud-broken.svg",
            "assets/images/icons/03nd/065-cloudy-overcast.svg",
            "assets/images/icons/03nd/079-cloud-few-night.svg"
        ]
        return Icon.getRandomItem(i)
    }
    // use for 10n as well
    static o9dn(){
        let i = [
            "assets/images/icons/09nd10n/015-rain-23.svg",
            "assets/images/icons/09nd10n/019-rain-22.svg",
            "assets/images/icons/09nd10n/032-rain-17.svg",
            "assets/images/icons/09nd10n/052-rain-15.svg",
            "assets/images/icons/09nd10n/054-rain-14.svg",
            "assets/images/icons/09nd10n/058-rain-12-heavy.svg",
            "assets/images/icons/09nd10n/080-rain-11.svg",
            "assets/images/icons/09nd10n/081-rain-10heavy.svg",
            "assets/images/icons/09nd10n/084-rain-heavy.svg",
            "assets/images/icons/09nd10n/086-rain-light.svg",
            "assets/images/icons/09nd10n/099-rain-4.svg",
            "assets/images/icons/09nd10n/100-rain-3.svg",
            "assets/images/icons/09nd10n/104-rain-2.svg",
            "assets/images/icons/09nd10n/heavy-rain.svg",
            "assets/images/icons/09nd10n/rain.svg"
        ]
        return Icon.getRandomItem(i)
    }

    static o10d(){
        let i = ["assets/images/icons/10d/042-rain-9-day.svg"]
        return i
    }

    static o11dn(){
        let i = [
            "assets/images/icons/11nd/020-storm-11.svg",
            "assets/images/icons/11nd/048-storm-8.svg",
            "assets/images/icons/11nd/057-storm-7.svg",
            "assets/images/icons/11nd/068-storm-5.svg",
            "assets/images/icons/11nd/071-storm-3.svg",
            "assets/images/icons/11nd/083-storm-2.svg",
            "assets/images/icons/11nd/088-storm-1.svg",
            "assets/images/icons/11nd/089-storm.svg"
        ]
        return Icon.getRandomItem(i)
    }

}



module.exports=Icon;