const { registerService } = require("../services");

module.exports = async function registerController(req, res) {
  await registerService(req.body);
  return res.send(200);
};