const { Schema, model } = require('mongoose');

const messageSchema = Schema({

}, { timestamps: true });

module.exports.Message = model('Message', messageSchema);