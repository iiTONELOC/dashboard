module.exports = {
    // FORMATS UNIX TIME
    format_date: date => {
        return `${new Date((date * 1000)-14400000).getMonth() + 1}/${new Date((date * 1000)-14400000).getDate()}/${new Date(
            (date * 1000)-14400000
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
        t = new Date((date * 1000)-14400000).getHours();
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
        m = new Date((date * 1000)-14400000).getMinutes()
        h = new Date((date * 1000)-14400000).getHours()
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
            if (h == 0) {
                return `${(12) + ":" + m + " " + 'am'}`
            }
            return `${(h) + ":" + m + " " + 'am'}`
        }
    },

    render_icon: data => {
        let i = data.map(e => { return icon = e.icon })
        let weatherIcon = `http://openweathermap.org/img/wn/${icon}.png`
        icon = i[0].toString()
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
        let newDate = `${new Date((date * 1000)-14400000).getMonth() + 1}/${new Date((date * 1000)-14400000).getDate()}/${new Date(
            (date * 1000)-14400000
        ).getFullYear()}`;

        dayWk = (new Date(newDate).toLocaleString('en-us', { weekday: 'long' }));
        month = (new Date(newDate).toLocaleString('en-us', { month: 'short' }));
        d = new Date((date * 1000)-14400000).getDate()

        let day
        switch (d) {
            case 1 | 21 | 31:
                day = `${d}<sup>st </sup>`;
                break;
            case 2 | 22:
                day = `${d}<sup>nd </sup>`;
                break;
            case 3 | 23:
                day = `${d}<sup>rd </sup>`;
                break;
            default: day = `${d} <sup>th</sup>`
                break;
        }
        let formatted_date = `${dayWk},  ${month} ${day}`
        return formatted_date
    },

    format_uv: data => {
        let uv;
        if (data < 3) {
            uv ="green"
        }
        if (data > 2 & data < 6) {
            uv ="yellow"
        }
        if (data > 5 & data < 8) {
            uv ="orange"
        }
        if (data > 7 & data < 11) {
            uv ="red"
        }
        if (data >= 11) {
            uv ="indigo"
        }
        return uv
    }


}
