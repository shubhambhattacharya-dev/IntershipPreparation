import express from 'express'

const app=express()
const port=3000

app.get("/",(req,res)=>{
    console.log("req1");
},(req,res)=>{
    console.log("req2");
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})