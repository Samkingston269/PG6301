const { User } = require('../models/user');
const { Message } = require('../models/message');

module.exports.createMessage = async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save();
        return res.status(200).send(savedMessage);
    } catch (err) {
        return res.status(400).send(err)
    }
};

module.exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find({
            thread: req.params.thread,
        });
        return res.status(200).send(messages);
    } catch (err) {
        return res.status(400).send(err);
    }
}