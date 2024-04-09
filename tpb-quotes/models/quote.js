const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    character: {
        type: Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    }
});

module.exports = mongoose.model('Quote', quoteSchema);