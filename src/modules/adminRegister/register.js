const { sign } = require("../../utils/jwt");
const registerModel = require("./model");

const registerAdmin = async(req, res) => {
    try {
        let { full_name, password, login } = req.body;
        let user = await registerModel.create({full_name, password, login, role: "admin"});
        let token = sign({_id: user._id});
        res.send({
            success: true,
            message: "Registered successfully",
            token
        });
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

const login = async(req, res) => {
    try {
        let { login, password } = req.body;
        let user = await registerModel.findOne({password, login});
        if(user){
           let token = sign({_id: user._id, role : user.role});
           
           res.send({
            success: true,
            role: user.role,
            token
           });
        } else {
            res.status(404).send({
                success: false,
                message: "Login or password is wrong"
            });
        }
    } catch (error) {
        res.status(error.status || 400).send({
            success: true,
            message: error.message
        })
    }
};

const getAll = async(req, res) => {
    try {
        let user = await registerModel.find()
        if(user){
            res.send({
                success: true,
                data: user
            })
        } else{
            res.send({
                success: true,
                data: []
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    registerAdmin,
    login,
    getAll
}