//Higher order functions are functions that take one or more functions as arguments, or return a function as their result.

function x(){
    console.log("Nikesh");
}
function y(x){
    x();
}
y(x);

//example

const radius=[1,2,3,4];
const calculateArea=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
    output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));
