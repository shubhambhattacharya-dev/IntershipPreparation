//here we write how code work 
import { CustomEmitter } from "./component2.js";

const emitter=new CustomEmitter();

emitter.on("login",(user)=>{
    console.log("Login Activity",user.name);
})

emitter.on("login",(user)=>{
    console.log("Login Activity",user.email);
})

emitter.on("login",(user)=>{
    console.log("Updating Last Seen:",user.name)
})

emitter.emit('login',{
    name:"shubham",
    email:"shubham@107gmail.com",
    LastSeen:"22 Nov 17-11-2025 at 12:15am"
})