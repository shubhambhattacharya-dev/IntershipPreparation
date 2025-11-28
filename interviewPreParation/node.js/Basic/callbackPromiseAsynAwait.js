// callbacks

function lateData(b){
    setTimeout(()=>{
        b(null,"Here is your data")
    },2000)
}

lateData((err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

//promises

const m =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved data")
    },2000);
})

m.then((data)=>{
    console.log(data);
})


function getState(promise) {
    return Promise.race([promise, Promise.resolve('pending')])
        .then(value => {
            if (value === 'pending') return 'pending';
            return 'fulfilled';
        })
        .catch(() => 'rejected');
}

const p = new Promise(resolve => setTimeout(() => resolve(10), 2000));

getState(p).then(state => console.log(state)); // pending
setTimeout(() => getState(p).then(state => console.log(state)), 3000); // fulfilled
