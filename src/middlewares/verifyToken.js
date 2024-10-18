const { verify } = require("../utils/jwt");
const usersModel = require("../modules/users/model");

const verifyToken = () => {
    return async (req, res, next) => {
        let { token } = req.headers;
        if (!token) {
            res.status(404).send({
                success: false,
                message: "Token is not defined"
            });
            return
        };

        let { _id } = verify(token);
        let users = await usersModel.find()
        let user = await usersModel.findById(_id);
        console.log(users)
        if (user) {
           return next();
        } else {
            
            res.status(400).send({
                success: false,
                message: "Token is wrong"
            });
        };
    };
};

module.exports = verifyToken;