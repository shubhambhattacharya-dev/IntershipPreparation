import express from 'express'

const app=express();
const port=3000;

let numberOfRequests=0;

function calculateRquestsPerMinute(req,res,next){
    numberOfRequests++;
    next();
}

app.get("/",calculateRquestsPerMinute,(req,res)=>{
    res.send(`Number of requests in the last minute: ${numberOfRequests}`);
});

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})