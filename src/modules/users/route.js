const { Router } = require("express");
const { create, getAll, update, drop } = require("./users");

const usersRouter = Router()

usersRouter.post('/create', create);
usersRouter.get('/all', getAll);
usersRouter.patch('/update/:_id', update);
usersRouter.delete('/delete/:_id',  drop);

module.exports = usersRouter;