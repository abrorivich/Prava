const {Schema , model, Types} = require("mongoose")


const categoriesSchema = new Schema({
    level: {
        type: String,
        required: true
    },

    usersRegister: [
        {
            type: Types.ObjectId,
            ref: "UsersRegister"
        }
    ]
},{
    collection: "categories"
})

module.exports = model("Category", categoriesSchema)