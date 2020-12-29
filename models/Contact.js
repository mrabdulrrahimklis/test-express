const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    email: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("contact", ContactSchema);