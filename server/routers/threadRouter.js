const router = require('express').Router();
const { createThread, getThread } = require('../controllers/threadController');

router.route('/')
    .post(createThread)

router.route('/:user')
    .get(getThread)

module.exports = router;