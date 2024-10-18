const { Schema, model, Types } = require("mongoose");

const usersRegisterSchema = new Schema({
    full_name: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    login: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    categories: [
        {
            type: Types.ObjectId,
            ref: "Category"
        }
    ]

}, {
    collection: "usersRegister"
});

module.exports = model('UsersRegister', usersRegisterSchema);