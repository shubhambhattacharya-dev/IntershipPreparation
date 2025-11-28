let i=0;

function repeat(){
    i++;
    console.log("Trick:",i);
    process.nextTick(repeat);
}
repeat();

// run first -> i=0;
//then go to repeat() -> i=1;->print trick:1 -> process.nextTick(repeat) -> put repeat in next tick queue
// now event loop checks next tick queue -> finds repeat -> goes to repeat() -> i=2;->print trick:2 -> process.nextTick(repeat) -> put repeat in next tick queue
// now event loop checks next tick queue -> finds repeat -> goes to repeat() -> i=3;->print trick:3 -> process.nextTick(repeat) -> put repeat in next tick queue
// this continues indefinitely without blocking the event loop for other operations.