/*callback Function passed into a another function as an argument,which then invoked inside the 
outer function to compute some kind of routine or action*/

setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});