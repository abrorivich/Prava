const { Router } = require("express");
const { create, getAll, update, drop } = require("./test");

const testRouter = Router()

testRouter.post('/create', create);
testRouter.get('/getAll', getAll);
testRouter.patch('/update/:_id', update);
testRouter.delete('/delete/:_id', drop);


module.exports = testRouter;