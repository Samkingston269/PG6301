const { Schema, model } = require('mongoose');

const threadSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
    },
    { timestamps: true }
);

module.exports.Thread = model('Thread', threadSchema);