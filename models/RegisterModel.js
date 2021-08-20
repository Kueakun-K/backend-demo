const mongoose = require('mongoose')

const RegisterSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const RegisterModel = mongoose.model('User', RegisterSchema)

module.exports = RegisterModel