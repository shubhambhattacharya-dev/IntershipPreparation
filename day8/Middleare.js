//1.user needs to send a kindney as a query parameter which should be a number  from 1-2 ( human only has 2 kidneys )
//2.user should send a username and password in headers

import express from "express"

const app =express()

const port=3000;

app.get("/healthcheckup",(req,res)=>{
 //middleware 
 const kidneyId=req.query.kidneyId;
const username=req.headers.username;
const password=req.headers.password;
if( username ==="shubham" && password ==="1234"){
    if(kidneyId==1 || kidneyId==2){
         res.json({
        message:"Health checkup done successfully"
    })

    }
   
}

})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})