import fs from 'fs'

const writeFile=fs.createWriteStream("notes.txt",{flags:'a'});
writeFile.write("This is appended line 1\n");
writeFile.write("This is appended line 2\n");
writeFile.end("This is the last appended line\n");

writeFile.on('finish',()=>{
    console.log("file appending completed");
})