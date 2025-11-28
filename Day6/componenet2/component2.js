//here we implement bluerint of our system 

export class CustomEmitter{
    constructor(){
        this.events={};
    }
//method 
on(eventName,callback){
    if(!this.events[eventName]){
        this.events[eventName]=[];
    }
    this.events[eventName].push(callback);//add listener (fifo)


}
emit(eventName,data){
    const listener=this.events[eventName];
    if(!listener) return;//event not lister

    for(let cd of listener){
        cd(data);
    }
}

}