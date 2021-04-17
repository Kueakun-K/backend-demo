const {TaskModel} = require('../models')

module.exports = async function getTasks(isFinished){
    const tasks = await TaskModel.find({isFinished: isFinished})
    return tasks
}