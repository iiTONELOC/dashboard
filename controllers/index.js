const router = require('express').Router();
// const apiRoutes = require('./api');
// TURN ON LATER AFTER TESTING
const homeRoutes = require('./home-routes');
const newsRoutes = require('./news-routes');
const weatherRoutes = require('./weather-routes');

// router.use('/api', apiRoutes);
// TURN ON LATER FOR HOME PAGE AND USER DASHBOARD
router.use('/', homeRoutes);
router.use('/news', newsRoutes);
router.use('/weather', weatherRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;