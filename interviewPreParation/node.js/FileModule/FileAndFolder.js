import fs from 'fs'

// create a new folder

fs.mkdir('CrudOpearation',(err,data)=>{
    if(err){
        console.log (err);
    }else{
        console.log('folder created:',data);
    }
})

fs.appendFile('CrudOpearation/index.html',"shubham kumar bhattacharya , i am a full stack developer , i love codiing",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created:',data);
    }
})
fs.readFile('CrudOpearation/index.html','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file read:',data);
    }
})

fs.watchFile('CrudOpearation/index.html',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file updated:',data);
    }
})

fs.writeFile('CrudOpearation/index.html',"i love javascript and node js",(err,data)=>{
    if(err){
        console.log(err);   
    }else{
        console.log('file updated:',data);
    }
})

fs.readFile('CrudOpearation/index.html','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file read:',data);
    }
})


fs.unlink('CrudOpearation/index.html',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file deleted:',data);
    }
})

fs.rmdir('CrudOpearation',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('folder deleted:',data);
    }
})