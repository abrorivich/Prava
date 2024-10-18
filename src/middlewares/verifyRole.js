const { verify } = require("../utils/jwt");
const usersModel = require("../modules/users/model");

const verifyRole = (...roles) => {
    return async (req, res, next) => {
        let { token } = req.headers;
        console.log({ req })
        if (!token) {
            res.status(404).send({
                success: false,
                message: "Token is not defined"
            });
            return
        }

        let result = verify(token);

        if (!result) {

            res.status(403).send({
                success: false,
                message: "incalid token"
            });
        }

        let user = await usersModel.findById(_id);
        if (user) {
            if (roles.find(el => el == user.role)) {
                req.user = user;

                next()
            } else {
                res.status(403).send({
                    success: false,
                    message: "Not allowed"
                });
            };
        } else {
            res.status(400).send({
                success: false,
                message: "Token is wrong"
            });
        };
    };
};

module.exports = verifyRole;