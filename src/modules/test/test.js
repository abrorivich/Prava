const testModel = require("./model.js")

const create = async (req, res) => {
    try {
        let tests = await testModel.create(
            { test: 1, question: "1 * 1", A: "1", B: "2" },
            { test: 2, question: "2 * 2", A: "4", B: "6" },
            { test: 3, question: "3 * 3", A: "9", B: "10" },
            { test: 4, question: "4 * 4", A: "16", B: "15" },
            { test: 5, question: "5 * 5", A: "25", B: "20" },
            { test: 6, question: "6 * 6", A: "36", B: "21" },
            { test: 7, question: "7 * 7", A: "49", B: "45" },
            { test: 8, question: "8 * 8", A: "64", B: "50" },
            { test: 9, question: "9 * 9", A: "81", B: "67" },
            { test: 10, question: "10 * 10", A: "100", B: "99" },
            { test: 11, question: "11 * 11", A: "121", B: "100" },
            { test: 12, question: "12 * 12", A: "144", B: "121" },
            { test: 13, question: "13 * 13", A: "169", B: "155" },
            { test: 14, question: "14 * 14", A: "196", B: "190" },
            { test: 15, question: "15 * 15", A: "225", B: "220" },
            { test: 16, question: "16 * 16", A: "256", B: "250" },
            { test: 17, question: "17 * 17", A: "289", B: "291" },
            { test: 18, question: "18 * 18", A: "324", B: "320" },
            { test: 19, question: "19 * 19", A: "361", B: "350" },
            { test: 20, question: "20 * 20", A: "400", B: "389" }
        );
        res.send({
            success: true,
            message: "Created!"
        })
    } catch (error) {
        console.log(error)
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

const getAll = async (req, res) => {
    try {
        let tests = await testModel.find()
        if (tests) {
            res.send({
                success: true,
                data: tests
            })
        } else {
            res.send({
                success: true,
                data: {}
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
        const { test, question, A, B } = req.body;
        const { _id } = req.params;
        const tests = await testModel.findById(_id);
        if (tests) {
            await testModel.findByIdAndUpdate(_id, { test, question, A, B });
            res.send({
                success: true,
                message: "Updated!"
            })
        } else {
            res.status(400).send({
                success: false,
                message: `Cannot found category with id ${id}`
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

        const tests = await testModel.findById(_id);

        if (tests) {
            await testModel.findByIdAndDelete(_id);

            res.send({
                success: true,
                message: "Deleted!"
            })
        } else {
            res.status(404).send({
                success: false,
                message: `Cannot found category with id ${id}`
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
    create,
    getAll,
    update,
    drop
}