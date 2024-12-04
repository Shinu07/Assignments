/* try converting the calculator assignment to use POST endpoints.
Check if it works with/without express.json middleware

1. http://localhost:3000/sum
2. http://localhost:3000/subtract
3. http://localhost:3000/multiply
4. http://localhost:3000/divide

*/

const express = require ('express')

    const app = express()

    app.use(express.json())


    // middleware to validate the function 

    function validateInput(req,res,next){
        const { a, b } = req.body

        console.log(isNaN(a),isNaN(b));
        
        if(!a || !b){
            res.status(400).send({
                error: "Please provide value for a and b"
            })
        } else if(isNaN(a) || isNaN(b)){
            res.status(400).send({
                error: "Please provide valid numbers for a and b",
            });
        }else{
            next()
        }
    }

    // this middleware used for all routes
    app.use(validateInput)

    app.post("/sum",(req,res)=>{
        const { a, b } = req.body

        res.send({
            result: a + b
        })
    })

    app.post("/ssubtrac",(req,res)=>{

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


    app.listen(3000)