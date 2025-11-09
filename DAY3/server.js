import http from 'http'

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify({
        message:"hello world"
    }))
})

server.listen(3000,()=>{
    console.log(`http://localhost:3000`); 
})