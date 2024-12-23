const mongoose = require('mongoose');
const articleScheme = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    likes: {
        default: 0,
        type: Number
    },

})

module.exports = mongoose.model('article', articleScheme);