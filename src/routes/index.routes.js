const {Router} = require('express')
const router = Router();
const {rendeIndex, renderLogin, renderRegister} = require('../controllers/index.controllers')

router.get('/', rendeIndex

);

router.get('/login', renderLogin 
);

router.get('/register', renderRegister
);



module.exports = router;
