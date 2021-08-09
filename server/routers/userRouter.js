const router = require('express').Router();
const { login, signUp } = require('../controllers/userController');

router.route('/login')
    .post(login)

router.route('/signUp')
    .post(signUp)

router.route('/hello')
    .get((req, res) => {
        return res.status(200).send({
            message: "Hello World"
        });
    })

module.exports = router;