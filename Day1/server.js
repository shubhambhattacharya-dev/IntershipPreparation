import http from 'http'

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('server is running successfully')
    
});

server.listen(3000,()=>{
    console.log(`http://Localhost:3000`);
})