const express = require("express");
const router = express.Router();
const controllers = require("./controllers");
const {RegisterModel} = require("./models");
// const {check,validationResult} = require('express-validator');

router.get("/tasks", (req, res) => controllers.getTasksController(req, res));

router.post("/task", (req, res) => controllers.createTaskController(req, res));

router.put("/task", (req, res) => controllers.updateTaskController(req, res));

router.delete("/task/:id", (req, res) => controllers.deleteTaskController(req, res));

router.post("/user", (req, res) => controllers.registerController(req, res));

router.post('/login', async (req, res) => {
    const { User, Password } = req.body
    const user = await RegisterModel.findOne({
      User,
      Password
    })
    if (user) {
      console.log(login_complete);
    } else {
      console.log(login_fail);
    }
  })

module.exports = router
// [
    // check('User', 'name is required').not().isEmpty(),
    // check('Password', 'password is required').not().isEmpty(),
// ],


// const result = validationResult(req);
// var errors = result.errors;

// for (var key in errors) {
//     console.log(errors[key].value);
// }

// if(!result.isEmpty()) {
//     res.render('register',{
//         errors: errors
//     })
// }
