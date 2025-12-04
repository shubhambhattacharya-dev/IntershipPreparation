//this - this is a keyword , normal function have this, this show you function called by this object . i show you with my code :

//suppose you have an object :

const users={
    name:"shubham",
    show:function(){
        console.log("shubham");
    }
}

//here is it the this work 

users.show();

//in simple word - this is a keyword that show function is runed by which object

//lexcial this - arrow functions ,they do have there own "this", arrow function takes his parents scope .
