const usersRegisterModel = require("./model")
const categoriesModel = require("../categories/model")

const register = async (req, res) => {
    try {
        let { full_name, password, login, category_ids } = req.body;
        
        let user = await usersRegisterModel.create({ full_name, password, login, categories: category_ids, role: "user" });
        await categoriesModel.updateMany({_id: {$in: category_ids}}, {$push: {usersRegister: user._id}})
        res.send({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    register
}