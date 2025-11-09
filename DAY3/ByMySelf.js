import http from 'http'
import fs from 'fs'


const server=http.createServer((req,res)=>{
    const url=req.url;
    const now=new Date().toLocaleDateString();

    //file bana jidhar user ka details store hoga

    fs.appendFileSync("record.txt",`${url} - ${now}\n`);

    if(url==="/"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("hello shubham");
    }
    else if(url==="/health"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({status:"ok"}));
    }
    else if(url==="/time"){
        res.writeHead(200,{'Content-Type':"text/html"});
        res.end(now);
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("not found");
    }

})

server.listen(3000,()=>{
    console.log(`http://localhost:3000`);
})
