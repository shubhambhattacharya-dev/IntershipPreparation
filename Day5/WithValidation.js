import EventEmitter from 'events'

const event=new EventEmitter();

event.on('signUp',(user)=>{
    try {
        if(!user || !user.name || !user.email){
            throw new Error("Invalid user data");
        }
        console.log(`wellcome ${user.name} and your email is ${user.email}`);
    } catch (error) {
        console.log('Listener Error:',error.message);
        
    }
})

event.emit('signUp',{
    name:"shubham",
    email:undefined
})