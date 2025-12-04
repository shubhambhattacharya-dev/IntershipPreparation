//arrow function  they do have there own "this", is takes parent's scope "this".

//ex-

// const user={
//     name:"shubham",
//     show:()=>{
//         console.log(this.name);
//     }
// }

// user.show();//this is undefine 

//kyun undefine - arrow function ne khud ka "this" nhi banaya .isliye wo upar(global) scope ka "this" le rha hai .
//global scope me "name" property define hi nhi hai . 

//corrct way be like :

const user={
    name:"shubham",
    show:function(){
        const arrow=()=>{
            console.log(this.name);
        }
        arrow();
    }
}

user.show();
