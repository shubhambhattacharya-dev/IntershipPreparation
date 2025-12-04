import fs from 'fs'
import stream from 'stream'

const read=fs.createReadStream("notes.txt",{encoding:'utf-8'})
read.on('error',(err)=>{
    console.error(err);
})
read.on('data',(chunk)=>{
    console.log("file chunk",chunk);
})

read.on('end',()=>{
    console.log("file reading completed")

})