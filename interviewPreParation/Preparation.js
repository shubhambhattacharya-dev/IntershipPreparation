console.log("A");

setTimeout(()=>{
    console.log('B');
})

setImmediate(()=>{
    console.log('C');
})

process.nextTick(()=>{
     console.log('D');
})

console.log('E');