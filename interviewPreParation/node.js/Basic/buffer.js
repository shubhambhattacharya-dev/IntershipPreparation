import fs from 'fs'

const read=fs.createReadStream('note.txt',{
    highWaterMark:8
})

read.on("data",chunk=>{
    console.log("chunk Buffer",chunk);
    console.log("chunk String",chunk.toString());
    
})