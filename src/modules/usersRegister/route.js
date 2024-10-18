const { Router } = require("express");
const { register } = require("./usersRegister");

const usersRegisterRouter = Router()

usersRegisterRouter.post('/register', register);

module.exports = usersRegisterRouter;