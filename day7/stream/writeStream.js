import fs from 'fs'


const write=fs.createWriteStream("notes.txt");
write.write("This is first line\n");
write.write("This is second line\n");
write.write("This is third line\n");
write.end("This is the last line\n");

write.on('finish',()=>{
    console.log("file writing completed");
})

//ye file ko overwrite kar dega
 //append mode me karna ho to flags:'a' use karna hoga