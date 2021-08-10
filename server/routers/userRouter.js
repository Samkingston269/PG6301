const router = require('express').Router();
const { userCreate, userLogin } = require('../controllers/userController');

router.route('/login')
    .post(userLogin)

router.route('/sign-up')
    .post(userCreate)

module.exports = router;