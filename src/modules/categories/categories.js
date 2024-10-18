const categoryModel = require("./model");

const getAll = async (req, res) => {
    try {
        let categories = await categoryModel.find()
        if (categories) {
            res.send({
                success: true,
                data: categories
            })
        } else {
            res.send({
                success: true,
                data: {}
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

const create = async (req, res) => {
    try {
        let { level } = req.body;
        let category = await categoryModel.create({ level });
        category.save();
        res.send({
            success: true,
            message: "Created!"
        })
    } catch (error) {
        console.log(error)
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

const update = async (req, res) => {
    try {
        const { level } = req.body;
        const { _id } = req.params;
        const category = await categoryModel.findById(_id);
        if (category) {
            await categoryModel.findByIdAndUpdate(_id, { level });
            res.send({
                success: true,
                message: "Updated!"
            })
        } else {
            res.status(400).send({
                success: false,
                message: `Cannot found category with id ${id}`
            })
        }
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

const drop = async (req, res) => {
    try {
        const { _id } = req.params;

        const category = await categoryModel.findById(_id);

        if (category) {
            await categoryModel.findByIdAndDelete(_id);

            res.send({
                success: true,
                message: "Deleted!"
            })
        } else {
            res.status(404).send({
                success: false,
                message: `Cannot found category with id ${id}`
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
    getAll,
    create,
    update,
    drop
}