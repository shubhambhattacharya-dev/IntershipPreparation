import  http from 'http'

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end("hii i am shubham");

})

server.listen(8000,()=>{
    console.log(`http://localhost:8000`);
})

