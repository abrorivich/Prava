const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const sign = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY);
};

const verify = (token) => {
    try {
       return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return null
    }
};

module.exports = {
    sign, verify
};