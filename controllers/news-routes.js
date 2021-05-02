const router = require('express').Router();
const News = require('../news')

router.get('/', async (req, res) => {
    
    const news = await News.getNewsJSON()
    
    res.render('news', {
        news
    })




    // ==============================================
})

module.exports = router




