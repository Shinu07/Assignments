/* try converting the calculator assignment to use POST endpoints.
Check if it works with/without express.json middleware

1. http://localhost:3000/sum
2. http://localhost:3000/subtract
3. http://localhost:3000/multiply
4. http://localhost:3000/divide

*/

const express = require('express')

const app = express()

app.use(express.json())


// middleware to validate the function 

function validateInput(req, res, next) {
    const { a, b } = req.body

    console.log(isNaN(a), isNaN(b));

    if (!a || !b) {
        res.status(400).send({
            error: "Please provide value for a and b"
        })
    } else if (isNaN(a) || isNaN(b)) {
        res.status(400).send({
            error: "Please provide valid numbers for a and b",
        });
    } else {
        next()
    }
}

// this middleware used for all routes
app.use(validateInput)

// optimized way to do it
const calculateres = (operaion) => (req, res) => {
    const { a, b } = req.body

    const opertors = {
        sum: (x, y) => x + y,
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y,
        divide : (x,y)=> {
            if(y === 0 ){
                res.status(400).json({error: "cannot divide by zero"})
            }
            return x/y
        }}

        const resx = opertors[operaion](a,b)
        return res.json({resx})
}

// Routes
app.post("/sum",validateInput,calculateres('sum'))
app.post("/sum",validateInput,calculateres('divide'))
app.post("/sum",validateInput,calculateres('multiply'))
app.post("/sum",validateInput,calculateres('subtract'))

/*

    app.post("/sum",(req,res)=>{
        const { a, b } = req.body

        res.send({
            result: a + b
        })
    })

    app.post("/subtrac",(req,res)=>{

        const { a, b } = req.body
        res.send({
            result: a - b
        })

    })

    app.post("/multiply",(req,res)=>{

        const { a, b } = req.body

        res.send({
            result: a*b
        })
    })

    app.post("/divide",(req,res)=>{

        const { a, b } = req.body
        res.send({
            result: a / b
        })

    })

*/
app.listen(3000)