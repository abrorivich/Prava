const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const registerRouter = require('../modules/adminRegister/route');
const usersRouter = require('../modules/users/route');
const categoryRouter = require('../modules/categories/route');
const usersRegisterRouter = require('../modules/usersRegister/route');
const testRouter = require('../modules/test/route');
const resultRouter = require('../modules/result/route');
const router = Router();


router.use('/register', registerRouter)
router.use('/users', usersRouter);
router.use('/categories', categoryRouter);
router.use('/register',  usersRegisterRouter);
router.use('/test',  testRouter);
router.use('/result',  resultRouter);


module.exports = router;