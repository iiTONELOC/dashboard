const router = require('express').Router();
const Location = require("../location")
const fetch = require('node-fetch');
const News = require('../news')

router.get('/', async (req, res) => {
    
    const news = await News.getNewsJSON()
    
    res.render('news', {
        news
    })




    // ==============================================
})

module.exports = router




