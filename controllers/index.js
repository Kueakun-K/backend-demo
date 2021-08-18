const getTasksController = require("./getTasksController");
const createTaskController = require("./createTaskController");
const updateTaskController = require("./updateTaskController");
const deleteTaskController = require('./deleteTaskController');
const registerController = require('./registerController')

module.exports = {
    getTasksController,
    createTaskController,
    updateTaskController,
    deleteTaskController,
    registerController,
};