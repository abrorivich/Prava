const {Schema , model, Type} = require("mongoose")


const testSchema = new Schema({
    test: {
        type: Number,
        required: true
    },

    question: {
        type: String,
        required: true
    },

    A: {
        type: String,
        required: true
    },

    B: {
        type: String,
        required: true
    }

},{
    collection: "test"
})

module.exports = model("Test", testSchema)