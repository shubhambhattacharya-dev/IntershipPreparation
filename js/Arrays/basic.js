//array is a collection of items stored in a single variable.continuos manner.

//challenges:1 create an array named orders that contains 5 recent product names.
//then

//1.print the frist and last order
//2/print the total number of orders using length.

const Orders=["shoes","Laptop","Bag","Pen","Book"];

console.log(Orders[0]);
console.log(Orders[Orders.length-1]);
console.log(Orders.length);

//challenges:2 Update and Add Orders

//tasks: 1.Replace pen with watch 
//tasks:2.Add a new order "Headphones" at the end of the array 
//Taks:3.print the updated array and the th new total number of order

const ordered=["shoes","Laptop","Bag","Pen","Book"];

ordered[3]="watch";
ordered.push("Headphones");

console.log(ordered);
console.log(ordered.length);

//challenges:3