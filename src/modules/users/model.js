const { Schema, model, Types } = require("mongoose");

const usersSchema = new Schema({
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
    collection: "users"
});

module.exports = model('Users', usersSchema);