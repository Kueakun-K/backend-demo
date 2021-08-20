const express = require("express");
const router = express.Router();
const controllers = require("./controllers");
const {RegisterModel} = require("./models");

router.get("/tasks", (req, res) => controllers.getTasksController(req, res));

router.post("/task", (req, res) => controllers.createTaskController(req, res));

router.put("/task", (req, res) => controllers.updateTaskController(req, res));

router.delete("/task/:id", (req, res) => controllers.deleteTaskController(req, res));

router.post("/signup", (req, res) => controllers.registerController(req, res));

router.post('/login',  (req, res) => {
    const { username, password } = req.body
    RegisterModel.findOne({ username: username}, (err, RegisterModel) => {
      if(RegisterModel){
          if(password === RegisterModel.password ) {
              res.send({message: "Login Successfull", RegisterModel: RegisterModel})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

module.exports = router
