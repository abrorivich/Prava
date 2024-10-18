const {Schema , model} = require("mongoose")


const resultSchema = new Schema({
    test: {
        type: Number,
        required: true
    },
    answer: {
        type: String,
        required: true
    }

},{
    collection: "result"
})

module.exports = model("Result", resultSchema)