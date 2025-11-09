//node provides runtime enviroment for js and node use chrome's V8 engine. node is Non-blocking I/O. 

//example Blocking and NON-blocking
//blocking maens synchronous 
//non-blocking asynchronous 

import fs from 'fs';

console.log('start');
const data=fs.readFileSync('./shu.txt',"utf-8");
console.log(data);
console.log('end');

import {readFile} from 'fs'

readFile('./shu.txt',"utf-8",(err,data)=>{
    if(err){
    console.log("Error occured",err);
    return;
}
console.log(data);
})
console.log('end');



