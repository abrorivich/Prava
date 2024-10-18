const { response } = require('express');
const usersModel = require('./model');

const create = async (req, res) => {
    try {
        let { full_name, password, login } = req.body;
        let users = await usersModel.create({ full_name, password, login, role: "user" });
        users.save()
        res.send({
            success: true,
            message: "Created!"
        })
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

const getAll = async (req, res) => {
    try {
        let users = await usersModel.find()
        if (users) {
            res.send({
                success: true,
                data: users
            })
        } else {
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


const update = async (req, res) => {
    try {
        const { _id } = req.params;
        const { full_name, password, login } = req.body;
        let user = await usersModel.findById(_id);
        if (user) {
            await usersModel.findByIdAndUpdate(_id, { full_name, login, password });
            res.send({
                success: true,
                message: "Updated!"
            })
        } else {
            res.status(404).send({
                success: false,
                message: `Cannot found user with id ${_id}`
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
        let user = await usersModel.findById(_id);
        if (user) {
            await usersModel.findByIdAndDelete(_id);
            res.send({
                success: true,
                message: "Deleted!"
            })
        } else {
            res.status(404).send({
                success: false,
                message: `Cannot found user with id ${_id}`
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