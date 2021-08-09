const { User } = require('../models/user');
const { Thread } = require('../models/thread');

module.exports.createThread = async (req, res) => {
    const newThread = new Thread({
        members: [req.body.sender, req.body.receiver],
    });

    try {
        const savedThread = await newThread.save();
        return res.status(200).send(savedThread);
    } catch (err) {
        return res.status(400).send(err);
    }
};

module.exports.getThread = async (req, res) => {
    try {
        const thread = await Thread.find({
            members: { $in: [req.params.userId] }
        });
        return res.status(200).send(thread);
    } catch (err) {
        return res.status(400).send(err);
    }
}