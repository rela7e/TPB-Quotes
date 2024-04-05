const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    content: {
        type: String,
        required: true
    }
});

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quotes: [quoteSchema] 
});

module.exports = mongoose.model('Character', characterSchema);