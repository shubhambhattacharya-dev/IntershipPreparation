import EventEmitter from 'events'

const event=new EventEmitter();

event.on('signUp',(user)=>{
    console.log(`wellcome ${user.name} and your email is ${user.email}`);

})

event.emit('signUp',{
    name:"Shubham",
    email:"ShubhamBhattacharya@Gmail.com"
})