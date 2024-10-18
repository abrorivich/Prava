const { Schema, model, Types } = require("mongoose");

const registerSchema = new Schema({
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
    }

}, {
    collection: "register"
});

module.exports = model('Register', registerSchema);