const express = require('express')
const router = express.Router();

loginGetController = require('../controllers/auth/login/get')
registerGetController = require('../controllers/auth/register/get')

loginPostController = require('../controllers/auth/login/post')
registerPostController = require('../controllers/auth/register/post')

logoutPostController = require('../controllers/auth/logout/post')


router.get('/login',
    loginGetController
    );

router.get('/register',
    registerGetController
    );

router.post('/login',
    loginPostController
    );

router.post('/register',
    registerPostController
    );
    
router.post('/logout',
    logoutPostController
    );




module.exports = router