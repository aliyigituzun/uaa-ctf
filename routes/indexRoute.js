const express = require('express')
const router = express.Router();

indexGetController = require('../controllers/index/index/get')
aboutUsGetController = require('../controllers/index/about_us/get')


router.get('/',
    indexGetController
    )

router.get('/about_us',
    aboutUsGetController
    )

    
module.exports = router