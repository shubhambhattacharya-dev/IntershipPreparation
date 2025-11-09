//Event Loop-The Event loop is the engine that lets Node.js handle multiple opearation without blocking,it continuously checks whether the main thread (call stack) is free-if yes ,it executes pending callbacks,timers,or promises.s

//simple word-Event loop decides when and how your async code execute.

import fs from 'fs';

console.log('start');

fs.readFile('./shu.txt','utf-8',(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})

setTimeout(()=>{console.log("setTimeOut call backs"),1000});
setImmediate(()=>{console.log("setImmediate call backs")});
process.nextTick(()=>{console.log("process.nextTick call backs")});
console.log('end');