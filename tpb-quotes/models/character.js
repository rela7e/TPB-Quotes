const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quote'
    }]
});

module.exports = mongoose.model('Character', characterSchema);