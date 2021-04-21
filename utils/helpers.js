module.exports = {
    // FORMATS UNIX TIME
    format_date: date => {
        return `${new Date(date * 1000).getMonth() + 1}/${new Date(date * 1000).getDate()}/${new Date(
            date * 1000
        ).getFullYear()}`;
    },

    format_mile: meter => {
        return mile = meter * .000621
    },

    chance_rain: data => {
        let current = data.map(e => { return chance = e.pop });
        return rain = current[0]
    },

    format_hourly_time: date => {
        t = new Date(date * 1000).getHours();
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
        m = new Date(date * 1000).getMinutes()
        h = new Date(date * 1000).getHours()
        if (h > 12) {
            if (m <= 9) {
                return `${(h - 12) + ":" + "0" + m + " " + 'pm'}`
            } else {
                return `${(h - 12) + ":" + m + " " + 'pm'}`
            }

        } else {
            return `${(h) + ":" + m + " " + 'am'}`
        }
    },

    render_icon: data => {
        let i = data.map(e => { return icon = e.icon })
        let weatherIcon = `http://openweathermap.org/img/wn/${icon}.png`
        icon = i[0].toString()
        return weatherIcon

    }

}
