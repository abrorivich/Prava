const { Router } = require("express");
const { create, getAll } = require("./result");

const resultRouter = Router()

resultRouter.post('/create', create);
resultRouter.get('/getAll', getAll);


module.exports = resultRouter;