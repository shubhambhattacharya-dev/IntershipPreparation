import express from 'express'

const app=express();
const port=3000;

app.use(express.json());

app.post("/",(req,res)=>{
    const Kidneys=req.body.Kidneys;
    const kidneysLength=Kidneys.length;

    res.send(`you have ${kidneysLength} kidneys`);
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})