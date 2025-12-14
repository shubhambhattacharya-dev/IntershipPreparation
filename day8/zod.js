//1 count a number of HTTP requests

import express from 'express'
const app =express()
const port =3000
let numberOfRequests =0;

function requestCounter(req,res,next){
    try {
        numberOfRequests++;
        console.log(`Number of reuests: ${numberOfRequests}`);
        next();
        
    } catch (error) {
        next(err);
        
    }
}

app.use(requestCounter);

app.get("/",(req,res)=>{
    res.send(`Number of requests so far: ${numberOfRequests}`);
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({
        message:"Something went wrong on the server"
    })
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})