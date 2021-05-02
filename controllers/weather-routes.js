const router = require('express').Router();
const fetch = require('node-fetch');
const Weather = require('../weather')

router.get('/:query', async (req, res) => {
    
   const search = req.params.query[0]
    const weather = Weather.dailyCity(search)
    console.log(weather)
    res.sendStatus(200)
    // res.render('homepage', {
        
    // })




    // ==============================================
})

module.exports = router
