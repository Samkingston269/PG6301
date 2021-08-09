const router = require('express').Router();
const { createMessage, getMessages } = require('../controllers/messageController');

router.route('/')
    .post(createMessage)

router.route('/:thread')
    .get(getMessages)

module.exports = router;

