import fs from 'fs'


//i use append 

fs.appendFile('crud.txt','hello i am shubham bhattacharya',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created:',data);
    }

})

fs.readFile('crud.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file read:',data);
    }
})

//overwrite 

fs.writeFile('crud.txt','modify the all the data',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file overwritten:',data);

    }
})

fs.readFile('crud.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file read:',data);
    }
})
fs.rename('crud.txt','crud1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file renamed:',data);
    }
})

fs.unlink('crud.txt',(err)=>{
    console.log('file deleted');
})

fs.readFile('crud.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file read:',data);
    }
})

fs.mkdir("newFolder",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('folder created:',data);
    }
})