import http from 'http'
import fs from 'fs'
import { PassThrough,pipeline } from 'stream'

const server=http.createServer((req,res)=>{
  const {url,method}=req;
  const now=new Date().toISOString();
  const log=`${now}-${method}-${url}\n`;

  const pass=new PassThrough();
  const fileStream=fs.createWriteStream('records.log',{flags:'a'});
  pass.end(log);
  pipeline(pass,fileStream,(err)=>{
    if(err){
      console.error(err);
    }
  })
  fs.appendFile('records.txt',log,(err)=>{
    if(err){
      console.error(err);
    }
  })
  if(url==='/'){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>Home Page</h1>');
  }else if(url==='/about'){
    res.writeHead(200,{'content-type':'plain/text'});
    res.end('About Page');
  }else{
    res.writeHead(404,{'content-type':'application/json'});
    res.end(JSON.stringlify({
      'message':'Page Not Found'
    }))
  }
})

server.listen(8000,()=>{
  console.log(`http://localhost:8000`);
})