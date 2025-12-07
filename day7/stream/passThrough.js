import fs from 'fs'
import { PassThrough} from 'stream'

const pass=new PassThrough();

// -monitor chunks passing through
pass.on('data',(chunk)=>{
    console.log("chunk received",chunk.toString());
})

pass.on('end',()=>{
    console.log("Pass through stream ended");
})

//read file and pipe to pass through
const read=fs.createReadStream("notes.txt",{encoding:'utf-8'});
read.pipe(pass);

read.on('end',()=>{
    pass.end();
})
