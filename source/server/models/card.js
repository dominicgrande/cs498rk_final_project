var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
    title		: String,
    description	: String,
    image       : String,
    location    : String,
    deadline    : Date,
    tags        : [String],
    status      : {
        type: Boolean,
        default: false
    },
    offer       : {
        type: Boolean,
        default: true
    },
    author: String
});

module.exports = mongoose.model('Card', cardSchema);