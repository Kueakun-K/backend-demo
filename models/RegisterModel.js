const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema({
    User: String,
    Password: String,
})

const RegisterModel = mongoose.model('Register', RegisterSchema)

module.exports = RegisterModel