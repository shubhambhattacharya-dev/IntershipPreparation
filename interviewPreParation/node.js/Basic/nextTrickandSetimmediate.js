console.log("start");
process.nextTick(()=>{
    console.log("nextTick");
})

setImmediate(()=>{
    console.log("setImmediate");
})

console.log("end");

