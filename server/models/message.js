const { Schema, model } = require('mongoose');

const messageSchema = Schema({
    thread: {
        type: Schema.Types.ObjectId,
        ref: 'Thread'
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
    }

}, { timestamps: true });

module.exports.Message = model('Message', messageSchema);