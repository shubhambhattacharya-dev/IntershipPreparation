import http from 'http'
import fs from 'fs'

const server=http.createServer((req,res)=>{
    const url=req.url
    const now=new Date().toLocaleString()
    fs.appendFileSync("log.txt",`${url} - ${now}\n`);
    if(url==='/'){
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end("shubham");
    }
    else if(url==='/health'){
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify({"status":"ok"}));
    }else if(url==='/time'){
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end(now);
    }else{
        res.writeHead(404,{'Content-type':'text/plain'});
        res.end("Not Found");
    }

   
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
