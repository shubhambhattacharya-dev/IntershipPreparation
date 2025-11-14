import EventEmitter from 'events'

const event=new EventEmitter();

//listener

event.on('signUp',()=>{
    console.log('Hii Shubham');
})

event.emit('signUp');