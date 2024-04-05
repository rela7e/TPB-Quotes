const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    who: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Quote', quoteSchema);