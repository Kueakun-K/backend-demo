const {RegisterModel} = require('../models')

module.exports = async function registerService(data){
    const user = new RegisterModel(data)
    return user.save()

}