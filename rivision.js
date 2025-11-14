import http from 'http'
import fs from 'fs'

const server=http.createServer((req,res)=>{
const url=req.url;
const now=new Date().toLocaleDateString();

fs.appendFileSync('data.txt',`${url}-${now}\n`);
if(url==='/'){
    res.writeHead((200),{'content-type':'text/plain'});
    res.end("hii shubham");
}
if(url==='/health'){
    res.writeHead((200),{'content-type':'application/json'});
    res.end(JSON.stringify({status:'ok'},
        {message:"shubham Bhattacharya"}
    ))
}
if(url==='/time'){
    res.writeHead((200),{'content-type':'text/html'})
    res.end(now);
}

})
server.listen(8000,()=>{
    console.log(`http://localhost:8000`);
})