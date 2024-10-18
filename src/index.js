const express = require("express")
const dotenv = require('dotenv/config')
const connectToMongoDB = require("./config/mongo")
const router = require("./routes")

const PORT = process.env.PORT || 7070
const app = express()
connectToMongoDB()

app.use(express.json())
app.use(router)


app.listen(PORT, console.log(PORT));
