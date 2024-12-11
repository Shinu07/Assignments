import express from "express";
const app = express();

let requestCounter = 0;

function countRequest(req, res, next) {
  requestCounter++;
  next();
}

app.use(countRequest);


app.get("/RequestCount",(req,res)=>{
    res.send({
        TotalRequestCount: requestCounter
    });
});
app.use("*",(req,res)=>{
    res.send("hi There your request is counted");
});

app.listen(3000,()=>{
    console.log("localhost:3000 server running");
});