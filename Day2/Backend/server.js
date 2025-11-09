import express from 'express'
import healthRouter from './routes/health.route.js'


const app=express();
const port=process.env.PORT || 8000;

app.use(express.json());

app.use("/api",healthRouter);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})