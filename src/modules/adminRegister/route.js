const { Router } = require("express");
const { registerAdmin, login, getAll } = require("./register");

const registerRouter = Router()

registerRouter.post('/registerAdmin', registerAdmin);
registerRouter.post('/login', login);
registerRouter.get('/getAll', getAll);

module.exports = registerRouter;