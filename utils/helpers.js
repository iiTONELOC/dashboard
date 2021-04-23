const Icon = require("./Icons")

module.exports = {
    // FORMATS UNIX TIME
    format_date: date => {
        return `${new Date((date * 1000) - 14400000).getMonth() + 1}/${new Date((date * 1000) - 14400000).getDate()}/${new Date(
            (date * 1000) - 14400000
        ).getFullYear()}`;
    },

    format_mile: meter => {
        return mile = meter * .000621
    },

    chance_rain: data => {
        let current = data.map(e => { return chance = e.pop });
        rain = current[0]
        rainChance = (rain * 100)
        return rainChance
    },
    chance_rain1: data => {
        rainChance = (data * 100)
        return rainChance
    },

    format_hourly_time: date => {
        t = new Date((date * 1000) - 14400000).getHours();
        if (t > 12) {
            return `${(t - 12) + " " + 'pm'}`
        } else {
            if (t == 0) {
                return `${("12") + " " + 'am'}`
            }
            return `${(t) + " " + 'am'}`
        }
    },

    format_condition_time: date => {
        m = new Date((date * 1000) - 14400000).getMinutes()
        h = new Date((date * 1000) - 14400000).getHours()
        if (h > 12) {
            if (m <= 9) {
                if (h == 0) {
                    return `${(12) + ":" + "0" + m + " " + 'pm'}`
                }
                return `${(h - 12) + ":" + "0" + m + " " + 'pm'}`
            } else {
                if (h == 0) {
                    return `${(12) + ":" + m + " " + 'pm'}`
                }
                return `${(h - 12) + ":" + m + " " + 'pm'}`
            }

        } else {
            if (m <= 9) {
                if (h == 0) {
                    return `${(12) + ":" + "0" + m + " " + 'am'}`
                }
                return `${(h) + ":" + "0" + m + " " + 'am'}`
            }
            if (h == 0) {
                return `${(12) + ":" + m + " " + 'am'}`
            }
            return `${(h) + ":" + m + " " + 'am'}`
        }
    },

    render_icon: data => {
        let i = data.map(e => { return e.icon })
        let icon = i[0].toString()
        let weatherIcon;
        switch (icon) {
            case "01d":
                weatherIcon = Icon.o1d();
                break;
            case "01n":
                weatherIcon = Icon.o1n();
                break;
            case "02d":
                weatherIcon = Icon.o2d();
                break;
            case "02n":
                weatherIcon = Icon.o2n();
                break;
            case "03n" | "03d" | "04d" | "04n" | "'03d'":
                weatherIcon = Icon.o3dn();
                break;
            case "09n" | "09d" | "10n":
                weatherIcon = Icon.o9dn();
                break;
            case "10d":
                weatherIcon = Icon.o10d();
                break;
            case "11d" | "11n":
                weatherIcon = Icon.o11dn();
                break;
            default:
                weatherIcon = `http://openweathermap.org/img/wn/${icon}.png`
                if (icon === "03d" | icon === "03n" | icon === "04d" | icon === "04n") {
                    return weatherIcon = Icon.o3dn()
                }
                break;
        }
        return weatherIcon
    },

    temp_avg: data => {
        return ((data.day + data.night) / 2).toFixed(2)
    },

    render_cond: data => {
        let i = data.map(e => { return e.description.toUpperCase() })
        return i
    },

    format_day: date => {
        let newDate = `${new Date((date * 1000) - 14400000).getMonth() + 1}/${new Date((date * 1000) - 14400000).getDate()}/${new Date(
            (date * 1000) - 14400000
        ).getFullYear()}`;

        dayWk = (new Date(newDate).toLocaleString('en-us', { weekday: 'long' }));
        month = (new Date(newDate).toLocaleString('en-us', { month: 'short' }));
        d = new Date((date * 1000) - 14400000).getDate()

        let day
        switch (d) {
            case 1 | 21 | 31:
                day = `${d}<sup>st</sup>`;
                break;
            case 2 | 22:
                day = `${d}<sup>nd</sup>`;
                break;
            case 3 | 23:
                day = `${d}<sup>rd</sup>`;
                break;
            default: day = `${d}<sup>th</sup>`
                break;
        }
        let formatted_date = `${dayWk},  ${month} ${day}`
        return formatted_date
    },

    format_uv: data => {
        let uv;
        if (data <= 2) {
            uv = "green"
        }
        if (data >= 3 & data <= 5) {
            uv = "yellow"
        }
        if (data >= 6 & data <= 7) {
            uv = "orange"
        }
        if (data >=8 & data <= 10) {
            uv = "red"
        }
        if (data >= 11) {
            uv = "indigo"
        }
        return uv
    },

    progress_bar: data => {
        if (data < 1) {
            data = (data * 100)
        }
        let stat;
        if (data <= 19.9999999999) {
            stat = "blue"
        }
        if (data >= 20 & data <= 35.99999999999999) {
            stat = "green"
        }
        if (data >= 36 & data <= 55.999999999999999) {
            stat = "orange"
        }
        if (data >= 56 & data <= 79.9999999999999999) {
            stat = "red"
        }
        if (data >= 80) {
            stat = "indigo"
        }
        return stat
    },
    progress_temp: data => {
        if (data < 1) {
            data = (data * 100)
        }
        let stat;
        if (data <= 19.999999999999) {
            stat = "indigo"
        }
        if (data >= 19.1 & data <= 29.999999999) {
            stat = "bg-primary"
        }
        if (data >= 30 & data <= 39.99999999999) {
            stat = "blue"
        }
        if (data >= 40 & data <= 49.9999999999999) {
            stat = "bg-success"
        }
        if (data >= 50 & data <= 59.999999999999) {
            stat = "green"
        }
        if (data >= 60 & data <= 69.999999999999) {
            stat = "yellow"
        }
        if (data >= 60 & data <= 69.999999999999) {
            stat = "orange"
        }
        if (data >= 70 & data <= 79.999999999999) {
            stat = "red"
        }
        if (data >= 80 & data <= 89.999999999999) {
            stat = "red1"
        }
        if (data >= 90 & data <= 99.999999999999) {
            stat = "red2"
        }
        if (data >= 100) {
            stat = "red3"
        }
        return stat
    },

    format_percent: data => {
        let current = data.map(e => { return chance = e.pop });
        if (current[0] < 1) {
            return current[0] * 100
        }
        return current[0]
    },

    percent: data => {
        let current = data
        if (current < 1) {
            return current * 100
        }
        return current
    },

    progress_rain: data => {
        let current = data.map(e => { return chance = e.pop });
        let rain = current[0]
        if (rain < 1) {
            rain = (rain * 100)
        }
        let stat;
        if (rain <= 20) {
            stat = "blue"
        }
        if (rain >= 21 & rain <= 35) {
            stat = "green"
        }
        if (rain >= 36 & rain <= 55) {
            stat = "orange"
        }
        if (rain >= 56 & rain <= 79) {
            stat = "red"
        }
        if (rain >= 80 ) {
            stat = "indigo"
        }
        return stat
    },

}
