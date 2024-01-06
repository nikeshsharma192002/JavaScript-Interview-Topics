//closures is function having access to the parent scope,even after the parent function has close.

function x(){
    var a=20;
    function y(){
        console.log(a);

    }
    y();
}
x();

function a(){
    var a=30;
    function b(){
        console.log(a);
    }
    return b;
}
var c=a();
console.log(c);
c();

function d(){
    for(let i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
    console.log("Namaste Javascript");
}
d();
