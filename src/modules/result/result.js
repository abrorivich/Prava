const testModel = require("./model")

const create = async (req, res) => {
    try {
        let { test, answer } = req.body;
        let tests = await testModel.create(
            { test: 1, answer: "A" },
            { test: 2, answer: "A" },
            { test: 3, answer: "A" },
            { test: 4, answer: "A" },
            { test: 5, answer: "A" },
            { test: 6, answer: "A" },
            { test: 7, answer: "A" },
            { test: 8, answer: "A" },
            { test: 9, answer: "A" },
            { test: 10, answer: "A" },
            { test: 11, answer: "A" },
            { test: 12, answer: "A" },
            { test: 13, answer: "A" },
            { test: 14, answer: "A" },
            { test: 15, answer: "A" },
            { test: 16, answer: "A" },
            { test: 17, answer: "A" },
            { test: 18, answer: "A" },
            { test: 19, answer: "B" },
            { test: 20, answer: "B" }
        );
        res.send({
            success: true,
            message: "Testlarga javob berildi javobini korish uchun get qiling"
        })
    } catch (error) {
        res.status(error.status || 400).send({
            success: false,
            message: error.message
        })
    }
}

const getAll = async (req, res) => {
    try {
        let tests = await testModel.find()
        let a = 0
        for (let i = 0; i < tests.length; i++) {
            const result = tests[i]
            if (result.answer == "A") {
                a++
            }
        }
        if (a >= 18) {
            res.send({
                success: true,
                message: `Tabriklaymiz siz ${a} ball bilan otdingiz`
            })
        } else if ( a < 18) {
            res.send({
                success: true,
                message: `Siz imtihondan yiqildingiz otish bali 18 ball edi siz ${a} ball topladingiz`
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
    getAll
}