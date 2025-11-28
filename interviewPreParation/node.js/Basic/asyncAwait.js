async function test(){
    return 10;
}

test().then(console.log);

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("data send ho gya"),2000});
    })
}
async function show(){
    const data=await getData();
    console.log(data);
}

show();