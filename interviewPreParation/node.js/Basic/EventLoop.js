console.log("A");

setTimeout(()=>{
    console.log("B");
},1000)

console.log("C");

setImmediate(()=>{
    console.log("D");
});

process.nextTick(()=>{
    console.log("E");
});

console.log("F");