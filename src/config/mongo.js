const { connect } = require("mongoose")

async function connectToMongoDB() {
    try {
        await connect("mongodb://localhost:27017/prava")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectToMongoDB
