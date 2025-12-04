import express from 'express';

const router=express.Router();

router.post('/login',(req,res)=>{
    res.json({
        message:"login successful"
    })
})

router.post('/signup',(req,res)=>{
    res.json({
        message:"signup successful"
    })
})