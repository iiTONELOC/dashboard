const express = require('express');
const routes = require('./controllers/');
const path = require('path');
const exphbs = require('express-handlebars');
require('dotenv').config();
const requestIp = require('request-ip');
const News = require('./news');






//IMPORT SESSIONS
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: { maxAge: 300000 },
//     resave: false,
//     saveUninitialized: true,
//     rolling: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sess));

// turn on routes
app.use(routes);

// try middleware for ip
app.use(requestIp.mw())
app.use(function (req, res) {
    const ip = req.clientIp;
    res.end(ip);
});

// turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
// });
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));

function update() {
    News.updateHeadlines();
    let timer = new Date()
    setInterval(function () {
        let counter = 0 ;
        let date = new Date();
        if ((date) - (timer) > 3600000) {
            counter ++
            console.log("It has been one hour! Updating News")
            console.log("News has been updated: " + counter + "times")
            timer = (new Date())
            News.updateHeadlines();
        } else {
            console.log("+++++++++++++++++++++\nTimer is running, but it has not been one hour it has been " +((date-timer/1000)/60)+" Mins since last check")
        }
    }, 150000)

}

update()

