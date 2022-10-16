const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id: String,
    name: String,
    phone: String
})


const Contact = mongoose.model("contacts-list111", schema)

module.exports = Contact;