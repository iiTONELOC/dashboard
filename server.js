const express = require('express');
const routes = require('./controllers/');
const path = require('path');
const exphbs = require('express-handlebars');
require('dotenv').config();




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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sess));

// turn on routes
app.use(routes);

// turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
// });
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));