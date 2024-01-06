/*Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, 
each taking a single argument. 
Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.*/

let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,3);
multiplyByTwo(5);

//using clouser

let multiply1=function(x){
    return function(y){
    console.log(x*y);
    }
}
let multiplybyTwo=multiply1(2);
multiplybyTwo(3);