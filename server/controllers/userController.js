const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/user');

module.exports.userCreate = async (req, res) => {
    let user = {};
    user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send({
        error: 'SIGN_UP_FAILED',
        message: 'user already exists'
    });

    user = new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const result = await user.save();
    return res.status(201).send({
        message: "user created!"
    })
}

module.exports.userLogin = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({
        error: "LOGIN_FAILED",
        message: "user not found"
    })

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.status(400).send({
        error: "LOGIN_FAILED",
        message: "invalid credentials"
    })

    const activeUser = user.active
    if (!activeUser) return res.status(400).send({
        error: "LOGIN_FAILED",
        message: "user is not active"
    })

    const token = user.generateJWT();
    return res.status(200).send({
        message: "login successful",
        token: token,
        user: _.pick(user, ["username", "role"])
    })
}