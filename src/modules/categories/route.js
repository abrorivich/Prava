const { Router } = require("express")
const { create, getAll, update, drop } = require("./categories")
const verifyRole = require("../../middlewares/verifyRole")

const categoryRouter = Router()

categoryRouter.post("/createCategory", create)
categoryRouter.get("/getAllCategory", getAll)
categoryRouter.patch("/updateCategory/:_id", update)
categoryRouter.delete("/deleteCategory/:_id", drop)

module.exports = categoryRouter