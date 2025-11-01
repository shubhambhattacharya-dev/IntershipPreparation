//what is am writing - sir can i asked you an question normal function that concept they do not asked in terviews,or challenges,code challenges,company senarios i want to do that sir. -incorrct

//corrct one - Sir,can i ask you a question?Are Normal function conceprs asked in terview,coding challenges,or company scenarios? I want to focus only on what's really useful.

//where i am wrong - 

//1."ask" insted of "asked" (beacuse you're taking now)
///////////////////////////////////////////////////////

//arrow function introduced in 2015 in ES6

//if arrow function is one line ,you can remove return and {}

const greet=()=>"hello world";

console.log(greet());

//challenge:2 create an arrow function named multiply that takes two numbers and returns their product

const multiply=(a,b)=>a*b;

console.log(multiply(2,3));

//2nd method:
const multiply1=(a,b)=>{
    return a*b;
}

let result=multiply1(2,3);
console.log(result);

//challenge:3 find the largest Number

//create an arrow function named findLarget that takes two numbers and return the largest one  

//hint ternary operator ? :

const findLargest=(a,b)=>a>b?a:b;

console.log(findLargest(2,3));

//ternary operator simple condition check 

//(conditon) ? "true" : "false"

//challenge :4 even and odd

const checkNumber=(a)=>(a%2==0) ? "even" :"odd";

console.log(checkNumber(2));

//challenge :5 Nested ternary + real world lofic

//how we can write more do condition : hint :=condition 1  ? value 1 : condition 2 ? value 2

const getGrade=(a)=>{
    return (a>=90) ? "A" :(a>=75) ? "B" : (a>=50) ? "C": "fail";

}

let result1=getGrade(80);
console.log(result1);