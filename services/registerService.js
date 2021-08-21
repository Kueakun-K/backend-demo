const {RegisterModel} = require('../models')
const bcrypt = require('bcryptjs') 

module.exports = async function registerService(data){
    const user = new RegisterModel(data)
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    return user.save()

}